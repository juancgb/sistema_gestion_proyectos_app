import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/** Constantes */
import { Constantes } from '../../constants/constantes';
/** Interfaces */
import { Proceso } from '../../interfaces/procesos/proceso';
import { NivelesCrudPage } from '../niveles-crud/niveles-crud';
import { Nivel } from '../../interfaces/procesos/nivel';

@Component({
  selector: 'page-procesos-cru',
  templateUrl: 'procesos-cru.html',
})
export class ProcesosCruPage {

  public nuevo: boolean;
  public proceso: Proceso;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.loadElements();
  }

  private loadElements(): void {
    this.nuevo = this.navParams.get(Constantes.NUEVO);
    if (this.navParams.get(Constantes.PROCESO_PARAM)) {
      this.proceso = this.navParams.get(Constantes.PROCESO_PARAM);
    } else {
      this.proceso = {
        descripcion: '',
        niveles: []
      };
    }
  }

  ionViewDidLoad() {
  }

  public abrirNivel(nivel: Nivel): void {
    let pathParam: any = {};
    pathParam[Constantes.NUEVO] = false;
    pathParam[Constantes.PROCESO_PARAM] = this.proceso;
    pathParam[Constantes.NIVEL_PARAM] = nivel;

    this.navCtrl.push(NivelesCrudPage, pathParam);
  }

  public nuevoNivel(): void {
    let pathParam: any = {};
    pathParam[Constantes.NUEVO] = true;
    pathParam[Constantes.PROCESO_PARAM] = this.proceso;

    this.navCtrl.push(NivelesCrudPage, pathParam);
  }
}
