export class Login {
    userId:string;
    passWord:string;

    constructor(userId:string,password:string) {
        this.userId = userId;
        this.passWord = password;
    }
}