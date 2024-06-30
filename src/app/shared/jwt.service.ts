import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";

@Injectable()
export class JwtService {

  decodeToken(token: string): { id: number; name: string; email: string;} {
    return jwtDecode(token);
  }
}


