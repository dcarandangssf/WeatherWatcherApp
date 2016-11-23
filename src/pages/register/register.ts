import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
// pages
import { LobbyPage } from '../lobby/lobby';
// providers
import { RestWWUser } from '../../providers/rest-ww-user';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController,
    private menu: MenuController,
    public restWWUser: RestWWUser) {}

  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
    this.menu.swipeEnable(false, 'menu1');
  }
  
  user = {};
  
  signupForm(form) {
    console.log(this.user);
    if (form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    this.restWWUser.register(this.user)
    .map(res => res.json())
    .subscribe(res => {
      window.localStorage.setItem('token', res.token);
      window.localStorage.setItem('userId', res.id);
      this.navCtrl.setRoot(LobbyPage);
    }, err => {
      alert("Uh ohes!");
    });
  }
}