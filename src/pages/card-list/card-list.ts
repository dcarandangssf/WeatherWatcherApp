import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardService } from '../../providers/card-service'


@Component({
  selector: 'page-card-list',
  templateUrl: 'card-list.html'
})
export class CardListPage {
  
  @Output() gotCardList = new EventEmitter();

  public cardList: any;
  
  constructor(
    public navCtrl: NavController,
    public cardService: CardService) {
      this.getCardList()
      this.gotCardList.emit(this.cardList);
    }

  ionViewDidLoad() {
    console.log('Hello CardListPage Page');
  }

  getCardList() {
    this.cardService.getCardList(window.localStorage.getItem('userId'), window.localStorage.getItem('token'))
      .map(res => res.json())
        .subscribe(res => {
          this.cardList = res || [];
          console.log("cardList")
          console.log(this.cardList)
          return this.cardList
        }, err => {
          alert("Warning Will Robinson!");
          this.cardList = [];
        });
  }

  deleteCity(cardId, index) {
    console.log("city deleted")
    console.log(cardId)
    this.cardService.deleteCard(cardId)
    this.cardList.splice(index, 1)
  }
  
  goToCity(card) {
    console.log("display favorite city")
    console.log(card)
    
  }
  
}
