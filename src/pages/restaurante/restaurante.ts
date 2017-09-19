import { HomePage } from './../home/home';
import { RestauranteClass } from './RestauranteClass';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';
/**
 * Generated class for the RestaurantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurante',
  templateUrl: 'restaurante.html',
})
export class RestaurantePage {

//Object.keys(obj).length
Restaurante : RestauranteClass;
Restaurantearray : RestauranteClass[]=[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private http:Http,
     public toastCtrl: ToastController,
     private alertCtrl: AlertController,
    
    
    ) {

    let DataLocal = this.http.get('assets/fakeinfo/rest.json').map(res => res.json()).subscribe(
      data=>{
        
       for (let numero = 0; numero < Object.keys(data).length; numero++)  {
        this.Restaurantearray.push(new RestauranteClass(data[numero].Nombre,"",data[numero].Imagen,data[numero].id));
        }   
    console.log(data[0].Nombre);
    this.toastgeneral(this.Restaurantearray[3].Nombre);

      
      },
      err=>{
    console.log("no funciono");

      }
    
    
    );


  }

  ionViewDidLoad() {

  }



  alertgeneral(titulo :string, subtitulo: string){
   let alert= this.alertCtrl.create({
        title:titulo,
        subTitle: subtitulo,
        buttons: ["OK"]


      }) 
       alert.present();

}


toastgeneral(message :string){
      let toast = this.toastCtrl.create({
                    message: message,
                    duration: 3000
                  });
                  toast.present();
}



OpenMenuPage(){

this.navCtrl.push(HomePage);

}



}
