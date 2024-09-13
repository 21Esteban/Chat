import React, { useState } from "react";
import { Chat } from "../interfaces/types";
import { ChatItem } from "./ChatItem";

interface SideBarProps {
  chats: Chat[];
  onSelectChat: (chatId: number) => void;
}

export const SideBar: React.FC<SideBarProps> = ({ chats, onSelectChat }) => {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

  const handleChatSelect = (chatId: number) => {
    setSelectedChatId(chatId);
    onSelectChat(chatId);
  };

  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0 h-full">
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-20 px-2">
          <img src="../../../public/banner.png" alt="" />
        </div>
        <div className="ml-2 font-bold text-2xl">Chat</div>
      </div>
      <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
        <div className="h-20 w-20 rounded-full border overflow-hidden">
          <img
            src="https://avatars3.githubusercontent.com/u/2763884?s=128"
            alt="Avatar"
            className="h-full w-full"
          />
        </div>
        <div className="text-sm font-semibold mt-2">Juan Esteban</div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center justify-between text-xs">
          <span className="font-bold">Active Conversations</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            4
          </span>
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2  overflow-y-auto h-full">
          {chats.map((chat) => (
            <ChatItem
              key={chat.id}
              name={chat.name}
              lastMsg={chat.lastMsg}
              numMessage={chat.numMessage}
              onSelectChat={() => handleChatSelect(chat.id)}
              isSelected={chat.id === selectedChatId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
