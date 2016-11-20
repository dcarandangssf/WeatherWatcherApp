import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, MenuController } from 'ionic-angular';
import { RestWeather } from '../../providers/rest-weather';
import { CitiesRest } from '../../providers/cities-rest';
// import { LocationService } from '../../providers/location-service'
import { CardService } from '../../providers/card-service'
import { WeatherCardPage } from '../weather-card/weather-card'
import 'rxjs/add/operator/map';

/*
  Generated class for the Lobby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/  
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
  providers: [WeatherCardPage]
})
export class LobbyPage {
  public locationData: any;
  public localForecast: any;
  public city: any;
  public cityParse: any;
  public state: any;
  public requestUrl: any;
  public day: any;
  public low: any;
  public high: any;
  public forecast: any;
  public card: any;
  public cardList: any;
  

  constructor(
    public navCtrl: NavController,
    private menu: MenuController,
    public weather: RestWeather,
    public citiesRest: CitiesRest,
    // public locationServ: LocationService,
    public cardService: CardService,
    public weatherCardPage: WeatherCardPage) {
      // this.locationData = this.locationServ.getLocation();
      // console.log(this.locationData);
      
      // this.city = this.locationData.location.city;
      // this.cityParse = this.locationData.location.city.split(' ').join('_');
      // this.state = this.locationData.location.state;
      // this.requestUrl = this.locationData.location.requesturl;
      
      // this.localForecast = data;
      // this.low = this.locationData.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
      // this.high = this.locationData.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
      // this.day = this.locationData.forecast.txt_forecast.forecastday["0"].title;
      // this.forecast = this.locationData.forecast.txt_forecast.forecastday["0"].fcttext;
      
      // this.isSaved = false;
      console.log(this.cardList)
      // this.card = this.weatherCardPage.getLocation();
      // console.log(this.card)
    }

          // this.city = data.location.city;
          // this.cityParse = data.location.city.split(' ').join('_');
          // this.state = data.location.state;
          // this.requestUrl = data.location.requesturl;
          
        // this.localForecast = data;
        // this.low = data.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
        // this.high = data.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
        // this.day = data.forecast.txt_forecast.forecastday["0"].title;
        // this.forecast = data.forecast.txt_forecast.forecastday["0"].fcttext;

  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
    this.menu.swipeEnable(true, 'menu1');
    
    this.cardService.getCardList(window.localStorage.getItem('userId'), window.localStorage.getItem('token'))
      .map(res => res.json())
        .subscribe(res => {
          // this.cardList = res;
          this.cardList = res || [];
          console.log("cardList")
          console.log(this.cardList)
          return this.cardList
        }, err => {
          alert("Warning Will Robinson!");
          this.cardList = [];
        });
  }


  onInput(value) {
    console.log(value);
  }

  // degrees() {
  //   console.log("changes °F/C")
  // }
  
  isSaved = false;
  
  // starClicked(card) {
    
  // }
  
  // saveFavorite() {
  //   this.cardService.saveCard();
  //   console.log("Saved to favorites")
    
  // }
  
  // saveFavorite() {
  //   this.card.userId = window.localStorage.getItem('userId');
  //   this.card.cityName = this.city;
  //   this.card.cityAPIUrl = this.requestUrl;
  //   this.card.id = window.localStorage.getItem('token')
  //     this.citiesService.save(this.card, this.card.id)
  //       .subscribe(res => {
  //         console.log(res);
  //         if (res.status === 200) {
  //           console.log(this.card.cityName + " saved to favorites!");
  //         }
  //       }, err => {
  //         console.log(err);
  //       })
  // }

  getCardList(e) {
    console.log(e)
    // console.log(this.cardList)
    
    // this.cardList = this.cardService.getList(window.localStorage.getItem('userId'), window.localStorage.getItem('token'))
    // this.cardList = this.citiesRest.getList(window.localStorage.getItem('userId'), window.localStorage.getItem('token'))
    // .map(res => res.json())
    //   .subscribe(data => {
    //     console.log(data);
    //   }, err => {
    //     console.log("warning!");
    //   });
    // console.log(this.cardList)
  }

  deleteCity(cardId, index) {
    console.log("city deleted")
    console.log(cardId)
    this.cardService.deleteCard(cardId)
    this.cardList.splice(index, 1)
  }  
  
}
