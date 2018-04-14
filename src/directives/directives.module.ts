import { NgModule } from '@angular/core';
import { AbrirMenuDirective } from './abrir-menu/abrir-menu';
import { AbrirNotificacioncesDirective } from './abrir-notificacionces/abrir-notificacionces';
@NgModule({
	declarations: [
		AbrirMenuDirective,
    	AbrirNotificacioncesDirective
	],
	imports: [],
	exports: [
		AbrirMenuDirective,
    	AbrirNotificacioncesDirective
	]
})
export class DirectivesModule {}
