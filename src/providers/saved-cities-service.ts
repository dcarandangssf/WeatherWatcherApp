import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SavedCities provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SavedCitiesService {

  private baseUrl = "https://weather-watcher-backend-dcarandangssf.c9users.io:8080/api/"
  private path = "Cities/"
  public cards = [];
  
  constructor(public http: Http) {
    console.log('Hello SavedCities Provider');
  }

  save(card, token) {
    this.cards.push(card)
    console.log("saved cards: " + this.cards)
    return this.http.post(
      this.baseUrl + this.path + '?access_token=' + token,
      card
    );
  }
  
  getList(userId, token) {
    console.log("getting list")
    return this.http.get(
      this.baseUrl + this.path + userId + '?access_token=' + token,
      )
  }
}
// http://weather-watcher-backend-dcarandangssf.c9users.io:8080/api/Cities?access_token=