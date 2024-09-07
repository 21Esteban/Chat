import React from 'react';

// Definición de tipos para las props del componente
interface ChatBubbleProps {
  name: string;
  lastHour: string;
  message: string;
  isCurrentUser: boolean;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ name, lastHour, message, isCurrentUser }) => {
  return (
    <div className={`flex items-start gap-2.5 ${isCurrentUser ? 'justify-start' : 'justify-end'}`}>
      {!isCurrentUser && (
        <img
          className="w-8 h-8 rounded-full"
          src="/docs/images/people/profile-picture-3.jpg"
          alt={`${name} profile`}
        />
      )}
      <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-3 border-gray-200 ${isCurrentUser ? 'bg-blue-100' : 'bg-gray-100'} rounded-e-xl rounded-es-xl`}>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-blue-400">
            {name}
          </span>
          <span className="text-sm font-normal text-gray-400">
            {lastHour}
          </span>
        </div>
        <p className="font-semibold py-2.5 text-zinc-950">
          {message}
        </p>
      </div>
    </div>
  );
};