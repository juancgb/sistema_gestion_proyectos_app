import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
/** Paginas */
import { LoginPage } from '../login/login';
import { HomeEstudiantePage } from '../home-estudiante/home-estudiante';
import { HomeDocentePage } from '../home-docente/home-docente';

@Component({
  selector: 'page-seleccion-login',
  templateUrl: 'seleccion-login.html',
})
export class SeleccionLoginPage {

  public tipoUsuarios: Array<{ tipo: number, descripcion: string }>;

  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  private splashScreen: SplashScreen) {
    this.isLogged();
    this.tipoUsuarios = [
      { tipo: 0, descripcion: 'Estudiante' },
      { tipo: 1, descripcion: 'Docente' },
    ];
  }

  ionViewDidLoad() {
    this.isLogged();
  }

  public goToSignOut(tipo){
    this.navCtrl.push(LoginPage, { tipoUsuario: tipo });
  }

  private isLogged() {
    let tipoUsuario = parseInt(localStorage.getItem('tipoUsuario'));
    // machete para que entre en validacion
    if (tipoUsuario !== undefined || tipoUsuario !== null) {
      switch (tipoUsuario) {
        case 0:
          this.navCtrl.setRoot(HomeEstudiantePage);
          break;
        case 1:
          this.navCtrl.setRoot(HomeDocentePage);
          break;
      }
    }
    this.splashScreen.hide();
  }
}
