import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SavedCities page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-saved-cities',
  templateUrl: 'saved-cities.html'
})
export class SavedCitiesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SavedCitiesPage Page');
  }

}
