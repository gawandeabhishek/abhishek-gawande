import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticateUser = async () => {
    try {
        const user = await currentUser();

        if (!user) {
            return { status: 403, message: "User not authenticated" };
        }

        const existingUser = await db.user.findUnique({
            where: {
                clerkId: user.id,
            },
        });
        
        if (!existingUser) {
            
            const newUser = await db.user.create({
                data: {
                    clerkId: user.id,
                    name: user.fullName || "",
                    email: user.emailAddresses[0].emailAddress,
                },
            });

            return { status: 201, user: newUser };
        }

        return { status: 200, user: existingUser };

    } catch (error) {
        console.error("Error authenticating user:", error);
        return { status: 500, message: "Internal server error" };
    }
};
