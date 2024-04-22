export class Messages {
  text: string | undefined;
  userId: number | undefined;
  createdOn: number | undefined;
  isRead: boolean = false;
  messageType: MessageType | undefined;
}

export enum MessageType {
  image = 'image',
  text = 'text'
}
