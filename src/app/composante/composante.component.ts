import {Component, signal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-composante',
  templateUrl: './composante.component.html',
  styleUrl: './composante.component.scss'
})
export class ComposanteComponent {
  composante = signal<string>("");
  parcours = signal<string[]>([]);

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    this.activatedRoute.params.subscribe(url => {
      this.composante.set(url.composante);
      this.httpClient.get<string[]>(`${environment.apiUrl}read/`, {
        params: {
          node_filter: 'subject',
          node_property: this.composante(),
          node_result: 'curriculum'
        }
      }).subscribe(data => {
        this.parcours.set(data);
      })
    });

  }
}
