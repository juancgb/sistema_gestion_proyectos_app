import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
/**Dependencias */
import { ChartsModule } from 'ng2-charts';
import { MomentModule } from 'angular2-moment/moment.module';

import { MyApp } from './app.component';
/** Directivas */
import { DirectivesModule } from '../directives/directives.module';
/** Paginas */
import { HomePage } from '../pages/home/home';
import { SeleccionLoginPage } from '../pages/seleccion-login/seleccion-login';
import { LoginPage } from '../pages/login/login';
import { HomeDocentePage } from '../pages/home-docente/home-docente';
import { HomeEstudiantePage } from '../pages/home-estudiante/home-estudiante';
import { MenuPage } from '../pages/menu/menu';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { DetalleProyectoPage } from '../pages/detalle-proyecto/detalle-proyecto';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SeleccionLoginPage,
    LoginPage,
    HomeDocentePage,
    HomeEstudiantePage,
    DetalleProyectoPage,
    MenuPage,
    NotificacionesPage
  ],
  imports: [
    BrowserModule,
    DirectivesModule,
    ChartsModule,
    MomentModule,
    PipesModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SeleccionLoginPage,
    LoginPage,
    HomeDocentePage,
    HomeEstudiantePage,
    DetalleProyectoPage,
    MenuPage,
    NotificacionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
