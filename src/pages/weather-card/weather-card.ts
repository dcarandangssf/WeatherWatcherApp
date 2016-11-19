import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestWeather } from '../../providers/rest-weather'
import { CardService } from '../../providers/card-service'
import { Card } from '../../models/weather-card-model'

/*
  Generated class for the WeatherCard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-weather-card',
  templateUrl: 'weather-card.html'
})
export class WeatherCardPage {
  public card: any;
  public city: any;
  public cityParse: any;
  public state: any;
  public requestUrl: any;
  public forecast: any;
  public location: any;
  public localForecast: any;
  public low: any;
  public high: any;
  public day: any;
  public weatherCard: any;
  public locationData: any;
  public forecastData: any;
  public lowF: any;
  public highF: any;
  public lowC: any;
  public highC: any;
  
  constructor(
    public navCtrl: NavController,
    public weather: RestWeather,
    public cardService: CardService) {
      this.getLocation();
      
      // console.log("weatherCard: " + this.weatherCard)
      // console.log(this.weatherCard)
      // console.log("card: " + this.card)
      // console.log(this.card)
      // console.log(this.locationData)
    }

  ionViewDidLoad() {
    console.log('Hello WeatherCardPage Page');
  }

  // card = {
  //   "userId": "",
  //   "cityName": "",
  //   "cityAPIUrl": ""
  // }

  

  getLocation() {
    this.weather.local()
      .subscribe(
        data => {
          this.location = data.location;
          this.city = data.location.city;
          this.cityParse = data.location.city.split(' ').join('_');
          this.state = data.location.state;
          this.requestUrl = data.location.requesturl;
          
          this.card = new Card("" , this.city + ", " + this.state, this.requestUrl)
          console.log(this.card)
          
          // this.card.userId = window.localStorage.getItem("userId");
          // this.card.cityName = this.city + ", " + this.state;
          // this.card.cityAPIUrl = this.requestUrl;
          
          // console.log(this.city)
          // console.log(this.state)
          // console.log(this.requestUrl)
          this.getLocalForecast(this.cityParse, this.state)
          // return this.locationData = {
          //   "location": this.location,
          //   "city": this.city,
          //   "cityParse": this.cityParse,
          //   "state": this.state,
          //   "requestUrl": this.requestUrl,
          // }
        })
  }

  getLocalForecast(city, state) {
    this.weather.getForecast(city, state)
      .subscribe(
        data => {
          this.localForecast = data;
          this.lowF = data.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
          this.highF = data.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
          this.lowC = data.forecast.simpleforecast.forecastday["0"].low.celsius;
          this.highC = data.forecast.simpleforecast.forecastday["0"].high.celsius;
          this.day = data.forecast.txt_forecast.forecastday["0"].title;
          this.forecast = data.forecast.txt_forecast.forecastday["0"].fcttext;
          
          this.low = this.lowF;
          this.high = this.highF;
          
          // console.log(this.localForecast);
          // console.log(this.low);
          // console.log(this.forecast);
          // return this.forecastData = {
          //   "localForecast": this.localForecast,
          //   "low": this.low,
          //   "high": this.high,
          //   "day": this.day,
          //   "forecast": this.forecast,
          // }
        }
      )
  }
  
  saveFavorite(card) {
    console.log("favorite saved")
    card.userId = window.localStorage.getItem("userId")
    card.cityAPIUrl = this.requestUrl
    this.cardService.saveCard(card)
    console.log(card)
  }
  
  degrees(deg) {
    console.log("degrees changed")
    console.log(deg)
    
    if (deg.checked === true) {
      this.low = this.lowF;
      this.high = this.highF;
    }
    else if (deg.checked === false) {
      this.low = this.lowC;
      this.high = this.highC;
    }
    
  }
}
