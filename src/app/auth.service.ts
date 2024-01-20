import {Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = signal<boolean>(false);

  constructor(private httpClient: HttpClient) {
    this.authenticated.set(!!localStorage.getItem("access_token"))
  }

  login(user: User) {
    return this.httpClient.post<User>(`${environment.apiUrl}login/`, {
        user
      }
    )
  }

  signup(user: User) {
    return this.httpClient.post<User>(`${environment.apiUrl}signup/`, {
        user
      }
    )
  }
}
