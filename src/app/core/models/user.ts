import { Role } from "./role";

export class User {
    id!: number;
    firstName!: string;
    lastName!: string;
    username!: string;
    role!: Role;
    token?: string;

    constructor(user?: User){
      if(user) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.username = user.username;
        this.role = user.role;
        this.token = user.token;
      }
    }
}

