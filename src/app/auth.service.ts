import {Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = signal<boolean>(false);

  constructor(private httpClient: HttpClient) {
    this.authenticated.set(!!localStorage.getItem("access_token"))
  }

  login(user: User) {
    return this.httpClient.post<User>(`http://127.0.0.1:8000/login/`, {
        user
      }
    )
  }

  signup(user: User) {
    return this.httpClient.post<User>(`http://127.0.0.1:8000/signup/`, {
        user
      }
    )
  }
}
