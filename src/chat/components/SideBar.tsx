import React, { useState } from 'react';
import { Chat } from '../interfaces/types';
import { ChatItem } from './ChatItem';

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
    <div className="p-4 bg-slate-200 h-screen border border-slate-300">
      <div>
     <h1 className='font-sans font-semibold '>Chats</h1>   
      </div>
      
      <ul>
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            imgProfile={chat.imgProfile}
            name={chat.name}
            lastMsg={chat.lastMsg}
            numMessage={chat.numMessage}
            onSelectChat={() => handleChatSelect(chat.id)}
            isSelected={chat.id === selectedChatId}
          />
        ))}
      </ul>
    </div>
  );
};