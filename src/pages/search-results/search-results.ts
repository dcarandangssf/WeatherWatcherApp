import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestWeather } from '../../providers/rest-weather';

/*
  Generated class for the SearchResults page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsPage {
  public results: any;
  public lat: any;
  public lon: any;

  constructor(
    public navCtrl: NavController,
    public weather: RestWeather) {}

  ionViewDidLoad() {
    console.log('Hello SearchResultsPage Page');
  }

  searchLocation(cityName) {
    console.log(cityName)
    this.weather.search(cityName)
      .subscribe(
        data => {
          this.results = data.RESULTS;
          console.log(this.results)
          return this.results
        }
      )
  }

  // getLocation() {
  //   this.weather.searchWeather()
  //     .subscribe(
  //       data => {
  //         this.location = data.location;
  //         this.city = data.location.city;
  //         this.cityParse = data.location.city.split(' ').join('_');
  //         this.state = data.location.state;
  //         this.requestUrl = data.location.requesturl;
          
  //         this.card = new Card("" , this.city + ", " + this.state, this.requestUrl, false)
  //         console.log(this.card)
          
          
  //         console.log(this.location)
  //         this.getLocalForecast(this.cityParse, this.state)
  //       })
  // }
  
  // getLocalForecast(city, state) {
  //   this.weather.getForecast(city, state)
  //     .subscribe(
  //       data => {
  //         this.localForecast = data;
  //         this.lowF = data.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
  //         this.highF = data.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
  //         this.lowC = data.forecast.simpleforecast.forecastday["0"].low.celsius;
  //         this.highC = data.forecast.simpleforecast.forecastday["0"].high.celsius;
  //         this.day = data.forecast.txt_forecast.forecastday["0"].title;
  //         this.forecast = data.forecast.txt_forecast.forecastday["0"].fcttext;
          
  //         this.low = this.lowF;
  //         this.high = this.highF;
  //       }
  //     )
  // }

  displayWeather(result) {
    console.log("display weather")
    this.lat = result.lat
    this.lon = result.lon
    console.log(this.lat)
    console.log(this.lon)
  }
  
}
