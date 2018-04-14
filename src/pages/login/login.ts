import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/** Paginas */
import { SeleccionLoginPage } from '../seleccion-login/seleccion-login';
import { HomeEstudiantePage } from '../home-estudiante/home-estudiante';
import { HomeDocentePage } from '../home-docente/home-docente';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private tipoUsuario: number;
  public labelsForm: any;
  private loginForm: FormGroup;

  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  private formBuilder: FormBuilder,
  private AlertController: AlertController) {
    // Obtener a donde quiere ir
    this.who();
    // Formulario de login
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
  }

  private who(): void {
    this.tipoUsuario = parseInt(this.navParams.get('tipoUsuario'));
    switch (this.tipoUsuario) {
      case 0:
        this.labelsForm = {
          usuario: 'Estudiante'
        }
        break;
      case 1:
        this.labelsForm = {
          usuario: 'Docente'
        }
        break;
    }
  }

  public signIn() {
    let credenciales = this.loginForm.value;
    
    let posibleError = 0;
    // Este switch/case es para decidir a cual pagina redirigir
    switch (this.tipoUsuario) {
      case 0:
        // Este if es para datos quemaditos
        if (credenciales['usuario'] === '1234567' && credenciales['password'] === 'estudiante'){
          this.navCtrl.setRoot(HomeEstudiantePage);
          localStorage.setItem('usuario', JSON.stringify(credenciales));
          localStorage.setItem('tipoUsuario', JSON.stringify(this.tipoUsuario));
        } else {
          posibleError++;
        }
        break;
      case 1:
        // Este if es para datos quemaditos
        if (credenciales['usuario'] === '32958100' && credenciales['password'] === 'docente') {
          this.navCtrl.setRoot(HomeDocentePage);
          localStorage.setItem('usuario', JSON.stringify(credenciales));
          localStorage.setItem('tipoUsuario', JSON.stringify(this.tipoUsuario));
        } else {
          posibleError++;
        }
        break;
      }
      if (posibleError > 0) {
      let alert = this.AlertController.create({
        title: 'Error!',
        subTitle: 'Tu usuario o contraseña son incorretas!',
        buttons: ['Aceptar']
      });
      alert.present();
    }
    // se reinicia el formulario
    this.loginForm.reset();
  }

  public goBack(){
    this.navCtrl.setRoot(SeleccionLoginPage);
  }
}
