import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home-estudiante',
  templateUrl: 'home-estudiante.html',
})
export class HomeEstudiantePage {

  public proyectoProgresoGeneral: any;
  public proyectoPorNiveles: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    // chart progreso general
    this.proyectoProgresoGeneral = {
      data: [60, 40],
      labels: ['Terminado', 'Por terminar'],
      type: 'doughnut',
      options: {
        legend: {
          display: false
        }
      }
    };
    // chart progreso por niveles
    this.proyectoPorNiveles = {
      data: [
        { data: [100], label: 'Seminario' },
        { data: [50], label: 'Trabajo de Grado I' },
        { data: [10], label: 'Trabajo de Grado II' },
      ],
      labels: ['Proyecto por niveles'],
      type: 'bar',
      options: {
        legend: {
          display: false
        },
        yAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      }
    };
  }

  ionViewDidLoad() {
  }

}
