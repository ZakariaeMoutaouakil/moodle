import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {ComposanteComponent} from "./composante/composante.component";
import {ErrorComponent} from "./error/error.component";
import {YearComponent} from "./year/year.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {authGuard} from "./auth.guard";

const routes : Routes =[
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "composantes/:composante",
    component: ComposanteComponent,
  },
  {
    path: "composantes/:composante/:parcours/:year",
    component: YearComponent,
    canActivate: [authGuard],
  },
  {
    path: "**",
    component: ErrorComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
