export class LoginDTO {
    username:string = "";
    password:string = "";

    public looginDTO(username:string,password:string){
        this.username = username;
        this.password = password;
    }
}