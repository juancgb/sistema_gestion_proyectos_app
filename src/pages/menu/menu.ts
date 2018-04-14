import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/** Paginas */
import { SeleccionLoginPage } from '../seleccion-login/seleccion-login';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  public signOut() {
    localStorage.clear();
    this.navCtrl.setRoot(SeleccionLoginPage);
  }
}
