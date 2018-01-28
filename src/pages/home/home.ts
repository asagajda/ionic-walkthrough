import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ModalController } from 'ionic-angular';
import { WalkthroughModalPage } from '../walkthrough-modal/walkthrough-modal';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: Storage,
              public modalCtrl: ModalController) {

  }

  ionViewDidLoad(){
    this.storage.set("asagajda@gmail.com", "")
  }

  checkAfterLogin(mail){
    this.storage.get(mail).then((val) => {
      console.log('mail from storage is: ', val);
      if (val === null) {
        this.storage.set(mail,"");
        this.presentModal();
      }
    });
  }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  presentModal() {
      let modal = this.modalCtrl.create(WalkthroughModalPage);
      modal.present();
    }

}
