import { NgModule } from '@angular/core';
import { FormatoFechaPipe } from './formato-fecha/formato-fecha';
@NgModule({
	declarations: [FormatoFechaPipe],
	imports: [],
	exports: [FormatoFechaPipe]
})
export class PipesModule {
	static forRoot() {
		return {
			ngModule: PipesModule,
			providers: []
		}
	}
}
