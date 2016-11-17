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
  public state: any;


  constructor(
    public navCtrl: NavController,
    private menu: MenuController,
    public weather: WeatherService) {
      this.getLocation();
      // this.getLocalForecast(this.location.city, this.location.state);
    }

  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
    this.menu.swipeEnable(true, 'menu1');
  }

  onInput($event) {
    console.log($event);
  }
  
  getLocation() {
    this.weather.local()
      .subscribe(
        data => {
          this.location = data.location;
          this.city = data.location.city;
          this.state = data.location.state;
          console.log(data.location)
        })
    return this.getLocalForecast(this.city, this.state)

  }
  
  getLocalForecast(city, state) {

    this.weather.getForecast(city, state).subscribe(
      data => {
        this.localForecast = data;
        console.log(this.localForecast);
      })
    return this.localForecast
  }

}
