import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/** Constantes */
import { Constantes } from '../../constants/constantes';
/** Interfaces */
import { Proceso } from '../../interfaces/procesos/proceso';
/** Paginas */
import { ProcesosCruPage } from '../procesos-cru/procesos-cru';

@Component({
  selector: 'page-procesos',
  templateUrl: 'procesos.html',
})
export class ProcesosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  public verProceso(proceso: Proceso): void {
    let pathParam: any = {};
    pathParam[Constantes.NUEVO] = false;
    pathParam[Constantes.PROCESO_PARAM] = proceso;

    this.navCtrl.push(ProcesosCruPage, pathParam);
  }

  public nuevoProceso(): void {
    let pathParam: any = {};
    pathParam[Constantes.NUEVO] = true;
    pathParam[Constantes.PROCESO_PARAM] = null;

    this.navCtrl.push(ProcesosCruPage, pathParam);
  }

}
