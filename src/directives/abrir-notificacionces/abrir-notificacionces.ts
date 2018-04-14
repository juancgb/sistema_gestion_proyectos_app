import { Directive, HostListener } from '@angular/core';
import { NavController } from 'ionic-angular';
/** Paginas */
import { NotificacionesPage } from '../../pages/notificaciones/notificaciones';

@Directive({
  selector: '[abrir-notificacionces]' // Attribute selector
})
export class AbrirNotificacioncesDirective {

  constructor(
    private navCtrl: NavController
  ) {}

  @HostListener('click', ['$event'])
  clickEvent() {
    this.navCtrl.push(NotificacionesPage);
  }

}
