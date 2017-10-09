import { MenuService } from './../providers/MenuService';
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
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-page',
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  menu:any;
  menuseleccionados:any;


  @ViewChild('mycontent') nav: NavController;


  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController,
    translate: TranslateService,
    public menuService:MenuService
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
  menuopenright() {
    var list;
    this.menu=this.menuService.returnmenu();
    this.menuseleccionados= this.menu.filter(
      menu=>menu.cantidad>0);
    

console.log(this.menuseleccionados);
    //console.log(this.menu);
   }



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

