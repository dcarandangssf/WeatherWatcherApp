import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { CitiesRest } from './cities-rest';
import { LocationService } from './location-service';
import { Card } from '../models/weather-card-model'

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
  // public cardList: any;
  public card: any;

  // card = {
  //   "userId": "",
  //   "cityName": "",
  //   "cityAPIUrl": "",
  //   "id": ""
  // }

  cardList = [];
  
  constructor(public http: Http,
              public citiesRest: CitiesRest,
              public locationService: LocationService) {
    console.log('Hello CardService Provider');
    // let card = this;
    this.card = new Card("" , "", "", false)
    // this.card.isFavorited = false;
    // this.cardInfo = this.locationService.getLocation();
    // this.cardinfo.forEach(funciton())
    
  }

  // getCard() {
  //   return this.citiesRest.getList(window.localStorage.getItem("userId"), window.localStorage.getItem("token"));
  // }
  
  saveCard(card) {
    // this.card.userId = window.localStorage.getItem('userId');
    // this.card.cityName = this.city;
    // this.card.cityAPIUrl = this.requestUrl;
    // this.card.id = window.localStorage.getItem('token')
    // card.userId = window.localStorage.getItem("userId")
    card.isFavorited = true;
    console.log(card)
      this.citiesRest.save(card, window.localStorage.getItem("token"))
        .subscribe(res => {
          console.log(res);
          if (res.status === 200) {
            console.log(this.card.cityName + " saved to favorites!");
          }
        }, err => {
          console.log(err);
        })
  }
  
  deleteCard(cardId) {
    console.log("removed favorite")
    // card.isFavorited = false;
      this.citiesRest.removeCard(cardId, window.localStorage.getItem("token"))
        .subscribe(res => {
          console.log(res);
          if (res.status === 200) {
            console.log(this.card.cityName + " deleted from favorites!");
          }
        }, err => {
          console.log(err);
        })
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
    // this.citiesRest.getList(userId, token);
    // this.citiesRest.getList(window.localStorage.getItem('userId'), window.localStorage.getItem('token'))
    //   .map(res => res.json())
    //     .subscribe(res => {
    //       this.cardList = res;
    //       // this.cardList = res || [];
    //       console.log("cardList")
    //       console.log(this.cardList)
    //       return this.cardList
    //     }, err => {
    //       alert("Warning Will Robinson!");
    //       // this.cardList = [];
    //     });
    return this.citiesRest.getList(userId, token)
  }

  // setCards(cards) {
  //   console.log("setting cards")
  //   this.cardList = cards;
  // }
  
}
