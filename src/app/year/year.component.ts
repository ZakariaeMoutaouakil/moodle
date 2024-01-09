import {Component, signal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Course} from "./course.type";



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
    this.httpClient.get<Course[]>("http://127.0.0.1:8000/cours/",
      {
        params: {
          parcours: this.parcours(),
          access_token: localStorage.getItem("access_token")
        }
      }
    ).subscribe(
      data => {
        console.log("courses : ",data)
        this.courses.set(data)
      }
    )
  }

  OnClick(course: Course) {
    console.log("OnClick")
    this.httpClient.post(`http://127.0.0.1:8000/subscribe/`, {
      course: course.title,
      access_token: localStorage.getItem("access_token")
    }).subscribe(data => {
      location.reload()
    })
  }
}
