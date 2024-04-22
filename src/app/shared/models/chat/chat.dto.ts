import { CreateAdsDTO } from "../ads/create-ads.model";
import { User } from "../user.model"
import { Messages } from "./messages.dto";

export class Chat {
  otherUser: User | undefined;
  UIDS: [number, number] | undefined;
  product: CreateAdsDTO | undefined;
  chatID: string | undefined;
  createdOn: number | undefined;
  modifiedOn: number | undefined;
  myInfo: User | undefined;
  lastMessage: Messages | undefined;
  userIds: any;
  block: block = new block()
}

export class block {
  id: number | undefined;
  block: boolean = false;
}
