import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

// Define the admin's Clerk user ID
const ADMIN_CLERK_ID = "user_2o6q3lCuOgeS1e0laM97iOm6rnY"; // Replace with your actual admin ID

export async function GET() {
  const clerkUser = await currentUser(); // Get the logged-in user from Clerk

  if (!clerkUser) {
    return NextResponse.json({ error: "User not authenticated." }, { status: 403 });
  }

  try {
    let messages;

    // If the logged-in user is the admin, fetch all messages
    if (clerkUser.id === ADMIN_CLERK_ID) {
      messages = await db.message.findMany({
        include: {
          sender: {
            select: { name: true },
          },
          receiver: {
            select: { name: true },
          },
        },
        orderBy: { createdAt: "asc" },
      });
    } else {
      // Fetch messages for the logged-in user (both sent and received)
      messages = await db.message.findMany({
        where: {
          OR: [
            { sender: { clerkId: clerkUser.id } }, // Messages sent by the user
            { receiver: { clerkId: clerkUser.id } }, // Messages received by the user
          ],
        },
        include: {
          sender: {
            select: { name: true },
          },
          receiver: {
            select: { name: true },
          },
        },
        orderBy: { createdAt: "asc" },
      });
    }

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch messages." }, { status: 500 });
  }
}

interface PostRequestBody {
  content: string;
  receiverClerkId: string;
  imageUrl?: string; // Optional field for image URL
}

export async function POST(request: Request) {
  const clerkUser = await currentUser(); // Get the logged-in user from Clerk

  if (!clerkUser) {
    return NextResponse.json({ error: "User not authenticated." }, { status: 403 });
  }

  const { content, receiverClerkId }: PostRequestBody = await request.json();

  if (!content || !receiverClerkId) {
    return NextResponse.json({ error: "Message content and receiverClerkId are required." }, { status: 400 });
  }

  try {
    // Check if the sender exists in the database using Clerk's clerkId
    let sender = await db.user.findUnique({ where: { clerkId: clerkUser.id } });

    // If the sender doesn't exist, create the user in the database
    if (!sender) {
      sender = await db.user.create({
        data: {
          clerkId: clerkUser.id,
          name: clerkUser.fullName,
          email: clerkUser.emailAddresses[0]?.emailAddress || null, // Handle potential null
        },
      });
    }

    // Check if the receiver exists in the database using the receiver's clerkId
    const receiver = await db.user.findUnique({ where: { id: receiverClerkId } });

    if (!receiver) {
      return NextResponse.json({ error: "Receiver not found." }, { status: 404 });
    }

    // Create the message in the database
    const message = await db.message.create({
      data: {
        content,
        senderId: sender.id,  // Use sender's database ID (from the sender object)
        receiverId: receiver.id,  // Use receiver's database ID
        imageUrl: clerkUser.imageUrl || null,  // Optional image URL
      },
    });

    console.log(message)

    return NextResponse.json({ message, status: "success" }); // Return a success response with the message
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Failed to send message.", details: error }, { status: 500 });
  }
}
