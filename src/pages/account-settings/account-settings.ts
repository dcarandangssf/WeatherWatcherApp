import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AccountSettings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account-settings',
  templateUrl: 'account-settings.html'
})
export class AccountSettingsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AccountSettingsPage Page');
  }

}
