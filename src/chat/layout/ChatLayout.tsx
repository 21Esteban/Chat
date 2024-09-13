import { useState } from "react";
import { SideBar } from "../components/SideBar";
import { Header } from "../components/Header";
import { ChatBubble } from "../components/ChatBubble";
import data from "../../assets/data/chat.json";
import { Chat, Message } from "../interfaces/types";
import { InputText } from "../components/InputText";

export const ChatLayout = () => {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(1);
  const chats: Chat[] = data.chats;

  const handleChatSelect = (chatId: number) => {
    setSelectedChatId(chatId);
  };

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  return (
    <div className="flex h-screen antialiased text-gray-800 ">
      <div className="flex flex-row h-full overflow-hidden w-screen border">
        <SideBar chats={chats} onSelectChat={handleChatSelect} />
          {selectedChat ? (
            <>
              <div className="flex flex-col flex-grow h-full p-6">
                <div className="flex flex-col flex-auto flex-shrink-0 bg-gray-100 p-4 h-full rounded-xl">
                   <Header
                userName={selectedChat.name}
                imgProfile={selectedChat.imgProfile}
              /> 
                  <div className="flex flex-col h-full overflow-hidden">
                    <div className="flex flex-col h-full overflow-x-auto mb-4">
                      <div className="flex flex-col h-full">
                        <div className="grid grid-cols-12 gap-y-2">
                          {selectedChat.messages.map((message: Message) => (
                          <ChatBubble
                            key={message.id}
                            name={selectedChat.name}
                            lastHour={message.lastHour}
                            message={message.message}
                            isCurrentUser={message.isCurrentUser}
                          />
                        ))}
                        </div>
                      </div>
                    </div>
                    <InputText/>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500">
              "Don't have any chat"
            </div>
          )}
        
      </div>
    </div>
  );
};
