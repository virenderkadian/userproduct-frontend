export class Admin{
    userName: string;
    email: string;
    password: string;
    constructor(userName: string, email: string, password: string) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
}