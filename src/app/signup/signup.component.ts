import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  StrongPasswordRegx: RegExp =
    /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
  firstFormGroup = this._formBuilder.group({
    nom: ['', [Validators.required, Validators.max(20)]],
    prenom: ['', [Validators.required, Validators.max(20)]],
    adresse: ['', [Validators.required, Validators.max(20)]],
    pays: ['', [Validators.required, Validators.max(20)]],
    date: ['', [Validators.required, Validators.max(20)]],
  });
  secondFormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.pattern(this.StrongPasswordRegx),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
  });
  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.formGroup = new FormGroup({
      "infos": this.firstFormGroup,
      "contact": this.secondFormGroup
    })
  }

  onSubmit() {
    this.authService.signup({
      name: this.formGroup.value.infos.nom,
      email: this.formGroup.value.contact.email,
      password: this.formGroup.value.contact.password
    }).subscribe(data => {
      this.authService.login({
        email: this.formGroup.value.contact.email,
        password: this.formGroup.value.contact.password
      }).subscribe(
        token => {
          localStorage.setItem("access_token", token["access_token"]);
          this.authService.authenticated.set(true)
          this.router.navigate(["/"])
        },
        error => {
        }
      )
    })
  }
}
