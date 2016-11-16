import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, MenuController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,
  private menu: MenuController) {}

  ionViewDidLoad() {
    console.log('Hello LobbyPage Page');
    this.menu.swipeEnable(true, 'menu1');
  }

  onInput($event) {
    console.log($event);
  }

}
