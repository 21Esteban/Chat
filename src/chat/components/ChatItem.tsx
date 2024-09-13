import React from "react";

interface ChatItemProps {
  name: string;
  lastMsg: string;
  numMessage: number;
  onSelectChat: () => void;
  isSelected: boolean;
}

export const ChatItem: React.FC<ChatItemProps> = ({
  name,
  lastMsg,
  numMessage,
  onSelectChat,
  isSelected,
}) => {
  const handleClick = () => {
    onSelectChat();
  };

  return (
    <button className={`rounded-xl p-2 ${isSelected ? 'bg-gray-100' : 'hover:bg-gray-100'}`} onClick={handleClick}>
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
          {name[0]}
        </div>
        <div className="ml-2 text-sm font-semibold">{name}</div>
        <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
          {numMessage}
        </div>
      </div>
        <div className="text-sm ml-2 mt-1 font-thin text-start">{lastMsg}</div>
    </button>
  );
};
