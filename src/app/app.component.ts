import { RestaurantePage } from './../pages/restaurante/restaurante';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;



  @ViewChild('mycontent') nav: NavController;


  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController,
    translate: TranslateService,
  ) {

    platform.ready().then(() => {

      translate.addLangs(["en", "es"]);
      translate.setDefaultLang('es');
     // this.nav.push(RestaurantePage);
     // this.nav.push(LoginPage);

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  ngOnInit() {


  }
  ionViewDidLoad() {



  }


  menuopen() {

  }
  menuopenright() { }



  alertgeneral(titulo: string, subtitulo: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      buttons: ["OK"]


    })
    alert.present();

  }


  toastgeneral(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }





}

