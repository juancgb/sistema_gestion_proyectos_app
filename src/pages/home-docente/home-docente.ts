import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalleProyectoPage } from '../detalle-proyecto/detalle-proyecto';

@Component({
  selector: 'page-home-docente',
  templateUrl: 'home-docente.html',
})
export class HomeDocentePage {

  private proyectos: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.proyectos = [
      {
        proyectoNombre: 'Sistema de apoyo a docentes virtuales',
        proyectoIntegrantes: [
          {
            codigo: '7881245',
            nombre: 'David Ernesto'
          },
          {
            codigo: '1245783',
            nombre: 'Juan Manuel'
          }
        ],
        proyectoProgreso: 50,
        proyectoNivel: {
          nivel: 1,
          nombre: 'Trabajo de grado I'
        },
        proyectoFechaCreacion: new Date('01/01/2018'),
        proyectoFechaActualizacion: new Date(new Date().getTime() - 3600000)
      },
      {
        proyectoNombre: 'Ingeniux',
        proyectoIntegrantes: [
          {
            codigo: '7881245',
            nombre: 'Jacobo Gomez'
          },
          {
            codigo: '1245783',
            nombre: 'Styven Florez'
          }
        ],
        proyectoProgreso: 20,
        proyectoNivel: {
          nivel: 1,
          nombre: 'Seminario'
        },
        proyectoFechaCreacion: new Date('02/01/2018'),
        proyectoFechaActualizacion: new Date(new Date().getTime() - 7200000)
      }
    ];
  }

  ionViewDidLoad() {
  }

  public goToProject(proyectoSeleccionado) {
    this.navCtrl.push(DetalleProyectoPage, { proyecto: proyectoSeleccionado });
  }
}
