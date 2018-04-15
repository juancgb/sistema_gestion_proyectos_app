import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detalle-proyecto',
  templateUrl: 'detalle-proyecto.html',
})
export class DetalleProyectoPage {

  private proyecto: any;
  private proyectoProgreso: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.proyecto = this.navParams.get('proyecto');
    this.proyectoProgreso = {
      data: [Math.abs(this.proyecto['proyectoProgreso']), Math.abs(this.proyecto['proyectoProgreso'] - 100)],
      labels: ['Terminado', 'Por terminar'],
      type: 'doughnut',
      options: {
        legend: {
          display: false
        }
      }
    };
  }

  ionViewDidLoad() {
    console.log(this.proyectoProgreso);
  }

}
