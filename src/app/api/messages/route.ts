import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const messages = await db.message.findMany({
      include: {
        sender: {
          select: { name: true },
        },
      },
      orderBy: { createdAt: "asc" },
    });

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
  const clerkUser = await currentUser(); // Logged-in user from Clerk

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
    const receiver = await db.user.findUnique({ where: { clerkId: receiverClerkId } });

    if (!receiver) {
      return NextResponse.json({ error: "Receiver not found." }, { status: 404 });
    }

    // Create the message in the database
    const message = await db.message.create({
      data: {
        content,
        senderId: sender.id,  // Use sender's database ID
        receiverId: receiver.id,  // Use receiver's database ID
        imageUrl: clerkUser.id !== "user_2o6q3lCuOgeS1e0laM97iOm6rnY" ? clerkUser.imageUrl : "https://dashboard.clerk.com/_next/image?url=https%3A%2F%2Fimg.clerk.com%2FeyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ybzZxM2xqd3JZUE9nazd2T25JVUk4NVZiSUoifQ&w=3840&q=75", // Include image URL if provided
      },
    });

    return NextResponse.json({ message, status: "success" }); // Return a success response with the message
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Failed to send message.", details: error }, { status: 500 });
  }
}
