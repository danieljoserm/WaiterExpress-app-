import { RestService } from './../providers/RestService';

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
import { Http } from '@angular/http';
@Component({
    selector: 'app-page',
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  menu:any;
  menuseleccionados:any;
  order:any;

  

  @ViewChild('mycontent') nav: NavController;


  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController,
    translate: TranslateService,
    public menuService:MenuService,
    public RestService:RestService,
    public http:Http,

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

  aumentarcantidad(cantidad:any,id:any){
   
    this.menuService.cambiarvaloresconidcantidad(cantidad+1,id);
    
  }

  disminuircantidad(cantidad:any,id:any){
    if(cantidad-1!=-1){
    this.menuService.cambiarvaloresconidcantidad(cantidad-1,id);
    }
  }




  ordenarbutton(){

    var orden;

    orden=this.menuseleccionados;
    orden.id_usuario=1;
    orden.id_restaurante=this.RestService.GetChosenRestaurant();
    orden.id_productos=[{"id":"0","cantidad":"0"}];
    for (let numero = 0; numero < Object.keys(this.menuseleccionados).length; numero++) {
      
      orden.id_productos[numero].id=this.menuseleccionados[numero].id;
      orden.id_productos[numero].cantidad=this.menuseleccionados[numero].cantidad;
    }

    // let DataLocal = this.http.post("http://localhost:8080/send_order.php",JSON.stringify(this.orden)).map(res => res.json()).subscribe(
      
   
    //  data=>{
   
    //       console.log(data);

   
    //      },
    //      err=>{
    //    console.log("no funciono");
   
    //      }
       
       
    //    );


    console.log("vea el json");
    console.log(JSON.stringify(orden));
    this.alertgeneral("agregar","se deben poder encolar varias ordenes si asi lo desea el usuario")
  }
  menuopenright() {
    var list;
    this.menu=this.menuService.returnmenu();
    this.menuseleccionados= this.menu.filter(
      menu=>menu.cantidad>0);
      console.log(this.menuseleccionados);
    

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

interface order{

id_usuario:any;
id_restaurante:any;

id:any
cantidad:any
//id_productos:any=[{id,cantidad}];
}

