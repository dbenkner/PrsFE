import { Requestline } from "../requestline/requestline.class";
import { User } from "../user/user.class";

export class Req {
    id: number = 0;
    description: string = "";
    justifcation: string ="";
    rejectionReason: string = "";
    deliveryMode: string = "Pickup";
    status: string = "NEW";
    total: number = 0;
    userId: number = 0;
    user!: User;
    requestLines!: Requestline[];
}