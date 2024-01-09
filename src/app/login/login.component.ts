import {Component, signal} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  StrongPasswordRegx: RegExp =
    /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
  errorMessage = signal<string>("");
  afterFirstTry = false

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      "email": new FormControl(null,
        // [Validators.required, Validators.email]
      ),
      "password": new FormControl(null, [
        Validators.required,
        // Validators.pattern(this.StrongPasswordRegx),
        // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ])
    })
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      token => {
        console.log(token)
        localStorage.setItem("access_token", token["access_token"])
        this.authService.authenticated.set(true)
        this.router.navigate(["/"])
      },
      error => {
        console.log(error.error.message)
        this.afterFirstTry = true;
        this.errorMessage.set("Veuillez rentrer des identifiants valides.")
      }
    )
    console.log(this.loginForm)
    console.log(this.loginForm.controls.password.status)
    this.errorMessage.set("Veuillez rentrer des identifiants valides.")
  }
}
