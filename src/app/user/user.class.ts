import { UserToRole } from "./usertorole.class";
import { Role } from "./role.class";
export class User {
    id:number = 0;
    username:string ="";
    password:string ="";
    firstname:string ="";
    lastname:string ="";
    phone:string ="";
    email:string ="";
    userRoles?:UserToRole[];
}