import { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar";
import { Header } from "../components/Header";
import { ChatBubble } from "../components/ChatBubble";
import data from "../../assets/data/chat.json";
import { Chat, Message } from "../interfaces/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Paperclip } from "lucide-react";
import customAxios from "@/utils/customAxios";

export const ChatLayout = () => {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(1);
  const chats: Chat[] = data.chats;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChatSelect = (chatId: number) => {
    setSelectedChatId(chatId);
  };

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  const getChats = async () => {
   try {
    console.log("Fetching data...");
     } catch (error) {
    console.error(error);
   }
  }

  useEffect(()=>{
    getChats()
  },[])

  return (
    <div className="flex justify-center items-center p-10 h-screen antialiased text-foreground bg-customGray">
      <SideBar />
      {selectedChat ? (
        <div className="flex flex-col flex-grow h-[90%]  pb-6 bg-card shadow-md">
          {/* Header */}
          <Header
            userName={selectedChat.name}
            imgProfile={selectedChat.imgProfile}
          />

          {/* Chat Area */}
          <div className="flex flex-col h-full px-8 overflow-hidden">
            <ScrollArea className="flex-1 mb-4">
              {selectedChat.messages.map((message: Message) => (
                <ChatBubble
                  key={message.id}
                  name={selectedChat.name}
                  lastHour={message.lastHour}
                  message={message.message}
                  isCurrentUser={message.isCurrentUser}
                />
              ))}
            </ScrollArea>

            {/* Input Area */}
            <div className="flex items-center space-x-2 mb-4">
              <Button type="submit" variant="secondary">
              <Paperclip />
              </Button>
              <Input
                type="text"
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" variant="default">
                Send
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-muted-foreground">
          Don&apos;t have any chat
        </div>
      )}
    </div>
  );
};


