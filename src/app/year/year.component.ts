import {Component, signal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Course} from "./course.type";
import {environment} from "../../environments/environment";



@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrl: './year.component.scss'
})


export class YearComponent {
  year = signal<string>("");
  parcours = signal<string>("");
  courses = signal<Course[]>([]);

  constructor(private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient) {
    this.activatedRoute.params.subscribe(url => {
        this.parcours.set(url.parcours);
        this.year.set(url.year);
      }
    );
    this.httpClient.get<Course[]>(`${environment.apiUrl}cours/`,
      {
        params: {
          parcours: this.parcours(),
          access_token: localStorage.getItem("access_token")
        }
      }
    ).subscribe(
      data => {
        this.courses.set(data)
      }
    )
  }

  OnClick(course: Course) {
    this.httpClient.post(`${environment.apiUrl}subscribe/`, {
      course: course.title,
      access_token: localStorage.getItem("access_token")
    }).subscribe(data => {
      location.reload()
    })
  }
}
