import  { useState } from 'react';
import { SideBar } from "../components/SideBar";
import { Header } from "../components/Header";
import { ChatBubble } from "../components/ChatBubble";
import data from "../../assets/data/chat.json";
import { Chat, Message } from "../interfaces/types";

export const ChatLayout = () => {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(1);
  const chats: Chat[] = data.chats;

  const handleChatSelect = (chatId: number) => {
    setSelectedChatId(chatId);
  };

  const selectedChat = chats.find(chat => chat.id === selectedChatId);

  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-4">
        <SideBar chats={chats} onSelectChat={handleChatSelect} />
      </div>
      <div className="col-span-8 flex flex-col">
        {selectedChat ? (
          <>
            <Header userName={selectedChat.name} imgProfile={selectedChat.imgProfile}/> 
            <div className="p-10">
              {selectedChat.messages.map((msg: Message) => (
                <ChatBubble
                  key={msg.id}
                  name={msg.name}
                  lastHour={msg.lastHour}
                  message={msg.message}
                  isCurrentUser={msg.isCurrentUser}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500">"Don't have any chat"</div>
        )}
      </div>
    </div>
  );
};