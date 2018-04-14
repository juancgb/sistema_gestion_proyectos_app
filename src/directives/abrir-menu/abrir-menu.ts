import { Directive, HostListener } from '@angular/core';
import { NavController } from 'ionic-angular';
/** Paginas */
import { MenuPage } from '../../pages/menu/menu';

@Directive({
  selector: '[abrir-menu]' // Attribute selector
})
export class AbrirMenuDirective {

  constructor(
    private navCtrl: NavController
  ) {}

  @HostListener('click', ['$event'])
  clickEvent(){
    this.navCtrl.push(MenuPage);
  }

}
