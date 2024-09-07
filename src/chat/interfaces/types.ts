export interface Message {
  id: number;
  name: string;
  lastHour: string;
  message: string;
  isCurrentUser: boolean;
}

export interface Chat {
  id: number;
  name: string;
  imgProfile: string;
  lastMsg: string;
  numMessage: number;
  messages: Message[];
}

export interface User {
  id: number;
  name: string;
  
}
