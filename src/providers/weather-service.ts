import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from 'ionic-native';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the WeatherService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WeatherService {
  private appId = 'c56568eedbc03ac8';
  private baseUrl = 'http://api.wunderground.com/api/c56568eedbc03ac8/geolookup/q/37.776289,-122.395234.json'

  constructor(public http: Http) {
    console.log('Hello WeatherService Provider');
  }

  local() {
    let Obs = Observable.create(observer => {
      Geolocation.getCurrentPosition()
        .then((resp) => {
          let lat = resp.coords.latitude;
          let lng = resp.coords.longitude;
          
          let url = this.baseUrl + this.appId;
          url += '/geolookup/q/';
          url += `${lat},${lng}`;
          
          this.http.get(url)
            .subscribe(
              data => {
                observer.next(data.json());
              },
              err => observer.error(err),
              () => observer.complete()
            )
            
        })
    })
  }
}