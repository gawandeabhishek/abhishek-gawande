"use client"; // Ensure this is a client component for interactivity

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  createdAt: string; // ISO date string from the server
  sender: {
    name: string; // Sender's name field
    imageUrl?: string; // Optional image URL field for sender
  };
  imageUrl?: string; // Optional image URL field for displaying images
  senderId: string;
  receiverId: string;
}

export default function ChatComponent({ isAdmin } : { isAdmin: boolean }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/messages");


        if (!res.ok) {
          const errorMessage = await res.text();
          throw new Error(
            `HTTP error! status: ${res.status} - ${errorMessage}`
          );
        }

        const data = await res.json();

        if (data.messages) {
          setMessages(data.messages);
        } else {
          console.error("No messages found in response");
          setErrorMessage("No messages found.");
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
        setErrorMessage("Failed to fetch messages.");
      }
    };

    fetchMessages(); // Fetch messages on component mount
  });

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: inputMessage.trim(),
          receiverClerkId: isAdmin ? selected : "cm2uluhuq001h108fwgvznwtq",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message.");
      }

      await response.json(); // Ensure message is sent

      setInputMessage(""); // Clear input after sending
      setErrorMessage(""); // Clear previous error messages

      // Refresh messages after sending
      const res = await fetch("/api/messages");
      const data = await res.json();
      setMessages(data.messages || []);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // Format the date and time for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZoneName: "short",
    };

    return new Intl.DateTimeFormat("en-US", options).format(
      new Date(dateString)
    );
  };

  return (
    <div className="flex flex-col p-4 border rounded-lg shadow-md lg:w-[60rem] h-[70vh] mx-10">
      <div className="overflow-y-auto flex-grow mb-4">
        {messages.map((message) => (
          <div key={message.id} className={cn("flex p-2 border-b gap-4", isAdmin && selected === message.senderId ? "bg-secondary/80" : "")} onClick={() => setSelected(message.senderId)}>
              <Avatar>
                {message.imageUrl && (
                  <AvatarImage
                    src={message.imageUrl}
                    alt={`${message.sender.name}'s avatar`}
                  />
                )}
                <AvatarFallback className="uppercase">
                  {message.sender.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            <div className="flex flex-col items-start justify-center">
              <p className="text-lg font-semibold h-auto w-full">
                {message.sender.name}: {message.content}
              </p>
            <span className="text-gray-500 text-xs">
              {formatDate(message.createdAt)}
            </span>
            </div>
          </div>
        ))}
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <Textarea
        placeholder="Type your message..."
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        className="mb-2"
      />
      <Button onClick={sendMessage}>Send</Button>
    </div>
  );
}