import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, MenuController } from 'ionic-angular';
import { WeatherService } from '../../providers/weather-service';

/*
  Generated class for the Lobby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/  
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html'
})
export class LobbyPage {
  public location: Object;
  public localForecast: Object;
  public city: any;
  public cityParse: any;
  public state: any;
  public requestUrl: any;
  public day: any;
  public low: any;
  public high: any;
  public forecast: any;
  

  constructor(
    public navCtrl: NavController,
    private menu: MenuController,
    public weather: WeatherService) {
      this.getLocation();
    }

  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
    this.menu.swipeEnable(true, 'menu1');
  }

  onInput(value) {
    console.log(value);
  }
  
  getLocation() {
    this.weather.local()
      .subscribe(
        data => {
          this.location = data.location;
          this.city = data.location.city;
          this.cityParse = data.location.city.split(' ').join('_');
          this.state = data.location.state;
          this.requestUrl = data.location.requesturl;
          console.log(data.location)
          console.log(this.requestUrl)
          this.getLocalForecast(this.cityParse, this.state)
        })
    return this.location

  }
  
  getLocalForecast(city, state) {
    this.weather.getForecast(city, state).subscribe(
      data => {
        this.localForecast = data;
        this.low = data.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
        this.high = data.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
        this.day = data.forecast.txt_forecast.forecastday["0"].title;
        this.forecast = data.forecast.txt_forecast.forecastday["0"].fcttext;
        console.log(this.localForecast);
      })
    return this.localForecast
  }

  saveFavorite() {
    console.log("saved to favorites!");
  }

}
