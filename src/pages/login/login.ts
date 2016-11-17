import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LobbyPage } from '../lobby/lobby';
import { RegisterPage } from '../register/register';

import { RestWWUser } from '../../providers/rest-ww-user';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login', 
  templateUrl: 'login.html'
})
export class LoginPage {
  
  constructor(
    public navCtrl: NavController,
    private menu: MenuController,
    public restWWUser: RestWWUser) {}  

  ionViewDidLoad() {
    console.log('Hello Landing Page');
    this.menu.swipeEnable(false, 'menu1');
  }

  user = {};
  
  // signinForm(form) {
  //   console.log(this.user);
  //   if (form.invalid) {
  //     return alert("Please fill in all of the required fields.");
  //   }
  //   this.navCtrl.setRoot(LobbyPage);
  // }

  signinForm(form) {
    console.log(this.user);
    if (form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    this.restWWUser.login(this.user)
    .map(res => res.json())
    .subscribe(res => {
      console.log(res);
      window.localStorage.setItem('token', res.id);
      window.localStorage.setItem('userId', res.userId);
      this.navCtrl.setRoot(LobbyPage);
    }, err => {
      console.log(err);
    });
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}