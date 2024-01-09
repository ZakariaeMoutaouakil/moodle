import { Injectable } from '@angular/core';
import {Card} from "./card";

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cards: Card[];
  constructor() { }
}
