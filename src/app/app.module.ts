import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './home/home.component';
import {MatListModule} from "@angular/material/list";
import { ComposanteComponent } from './composante/composante.component';
import {MatTreeModule} from "@angular/material/tree";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import { CourseComponent } from './course/course.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MatExpansionModule} from "@angular/material/expansion";
import { ErrorComponent } from './error/error.component';
import { YearComponent } from './year/year.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ComposanteComponent,
    CourseComponent,
    ErrorComponent,
    YearComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTreeModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
