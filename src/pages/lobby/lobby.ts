import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, MenuController } from 'ionic-angular';
import { WeatherService } from '../../providers/weather-service';
import { SavedCitiesService } from '../../providers/saved-cities-service';

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
  public card: any;
  

  constructor(
    public navCtrl: NavController,
    private menu: MenuController,
    public weather: WeatherService,
    public citiesService: SavedCitiesService) {
      this.getLocation();
      
      this.card = {};
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
    this.card.userId = window.localStorage.getItem('userId');
    this.card.cityName = this.city;
    this.card.cityAPIUrl = this.requestUrl;
    this.card.id = window.localStorage.getItem('token')
      this.citiesService.save(this.card, this.card.id)
        .subscribe(res => {
          console.log(res);
          if (res.status === 200) {
            console.log(this.card.cityName + " saved to favorites!");
          }
        }, err => {
          console.log(err);
        })
  }

}
