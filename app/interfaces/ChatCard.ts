export interface Message {
  id: number;

  sender: number;

  text: string;

  time: string;
}

export interface ChatCard {
  id: number;
  name: string;
  image: string; // real link for person image
  messages: Message[];
}
