
import { Injectable } from "@angular/core";
import { JwtService } from "./jwt.service";


@Injectable({
  providedIn: 'root'
})
export class User {
  public user: UserInstance | null = null;

  constructor(private readonly jwtService: JwtService){}

  getInfo(): UserInstance | null {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    const { id, name, email } = this.jwtService.decodeToken(token);

    if (this.user) {
      return this.user;
    }

    this.user = {id, name, email};
    return this.user;
  }

  getUser(): UserInstance | null{
    return this.user;
  }
}

export interface UserInstance {
  id: number;
  name: string;
  email: string;
}
