import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { CitiesRest } from './cities-rest';
import { LocationService } from './location-service';

/*
  Generated class for the CardService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CardService {
  public isFavorited: any;
  public cardInfo: any;
  public city: any;
  public requestUrl: any;
  public cardlist: any;

  card = {
    "userId": "",
    "cityName": "",
    "cityAPIUrl": "",
    "id": ""
  }

  // cardlist = [];
  
  constructor(public http: Http,
              public citiesRest: CitiesRest,
              public locationService: LocationService) {
    console.log('Hello CardService Provider');
    this.isFavorited = false;
    let card = this;
    
    
    this.cardInfo = this.locationService.getLocation();
    // this.cardinfo.forEach(funciton())
    
  }

  getCard() {
    return this.card;
  }
  
  saveCard() {
    this.card.userId = window.localStorage.getItem('userId');
    this.card.cityName = this.city;
    this.card.cityAPIUrl = this.requestUrl;
    this.card.id = window.localStorage.getItem('token')
      this.citiesRest.save(this.card, this.card.id)
        .subscribe(res => {
          console.log(res);
          if (res.status === 200) {
            console.log(this.card.cityName + " saved to favorites!");
          }
        }, err => {
          console.log(err);
        })
  }
  
  deleteCard() {
    console.log("removed favorite")
    // this.cards
  }
  
  saveCardList = function(card, token) {
    this.citiesRest.save(card, token)
    .map(res => res.json())
    .subscribe(res => {
      console.log(res);
    }, err => {
      console.log("warning!");
    });
  };
  
  getCardList(userId, token) {
    console.log("getting card list")
    return this.citiesRest.getList(userId, token);
  }
  
  setCards(cards) {
    console.log("setting cards")
    this.cardlist = cards;
  }
  
}
