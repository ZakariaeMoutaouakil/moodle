import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  composantes = [];
  protected readonly Object = Object;

  constructor(private httpClient: HttpClient,
              protected authService: AuthService,
              private router: Router) {
    this.httpClient.get(`${environment.apiUrl}composantes`)
      .subscribe(data => {
        for (let composante of Object.getOwnPropertyNames(data)) {
          let obj: Object = {};
          obj[`${composante}`] = data[composante];
          this.composantes.unshift(obj);
        }
      })
  }

  OnClick() {
    if (this.authService.authenticated()) {
      localStorage.removeItem("access_token")
      location.reload()
    } else {
      this.router.navigate(["/login"])
    }
  }
}
