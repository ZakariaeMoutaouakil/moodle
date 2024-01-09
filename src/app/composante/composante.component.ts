import {AfterViewChecked, AfterViewInit, Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-composante',
  templateUrl: './composante.component.html',
  styleUrl: './composante.component.scss'
})
export class ComposanteComponent {
  composante = signal<string>("");
  parcours = signal<string[]>([]);

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    this.activatedRoute.params.subscribe(url=>{
      this.composante.set(url.composante);
      this.httpClient.get<string[]>("http://127.0.0.1:8000/read/", {
        params: {
          node_filter: 'subject',
          node_property: this.composante(),
          node_result: 'curriculum'
        }
      }).subscribe(data => {
        this.parcours.set(data);
        console.log(data);
      })
    });

  }

  // ngAfterViewChecked(): void {
  //   this.composante.set(this.activatedRoute.snapshot.params["composante"]);
  //   console.log("ngAfterViewChecked")

    // this.subscription = this.httpClient.get<string[]>("http://127.0.0.1:8000/read/", {
    //   params: {
    //     node_filter: 'subject',
    //     node_property: 'Physique',
    //     node_result: 'curriculum'
    //   }
    // }).subscribe(data => {
    //   this.parcours.set(data);
    //   console.log(data);
    //   this.subscription.unsubscribe()
    // })
  // }
}
