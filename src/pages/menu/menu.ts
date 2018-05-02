import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/** Paginas */
import { SeleccionLoginPage } from '../seleccion-login/seleccion-login';
import { ProcesosPage } from '../procesos/procesos';
import { HomeEstudiantePage } from '../home-estudiante/home-estudiante';
import { HomeDocentePage } from '../home-docente/home-docente';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  private modulos: Array<any>;
  private homeUsuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.setHome();
    this.loadModulos();
  }

  private setHome(): void {
    switch (parseInt(localStorage.getItem('tipoUsuario'))) {
      case 0:
        this.homeUsuario = HomeEstudiantePage;
        break;
        case 1:
        this.homeUsuario = HomeDocentePage;
        break;
    }
  }
  
  private loadModulos(): void {
    this.modulos = [
      { componente: ProcesosPage, label: 'Procesos', icon: 'trending-up' }
    ];
    if (!this.isHome()){
      this.modulos.splice(0, 0, { componente: this.homeUsuario, label: 'Inicio', icon: 'home' });
    }
  }

  private isHome(): boolean {
    let firstComponent: string = this.navCtrl.first()['component']['name'];
    if(firstComponent.match('/home/i')){
      return true;
    } else {
      return false;
    }
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

  public goToComponent(componente: any) {
    this.navCtrl.setRoot(componente['componente']);
  }
}
