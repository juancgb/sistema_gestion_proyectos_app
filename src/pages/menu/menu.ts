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

  public tipoUsuarioLogueado(): string {
    let tipo: string = 'Usuario';
    switch (parseInt(localStorage.getItem('tipoUsuario'))) {
      case 0:
        tipo = 'Estudiante';
        break;
      case 1:
        tipo = 'Docente'
        break;
    }
    return tipo;
  }

  public signOut() {
    localStorage.clear();
    this.navCtrl.setRoot(SeleccionLoginPage);
  }
}
