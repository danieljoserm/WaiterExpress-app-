import { GlobalProvider } from './../../providers/global/global_Variables';
import { RestService } from './../../providers/RestService';
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

//@IonicPage()
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
     public RestService : RestService,
     public GlobalProvider : GlobalProvider
    
    
    ) {

    let DataLocal = this.http.get(this.GlobalProvider.GetServerUrl() + "/retrieve_restaurants.php").map(res => res.json()).subscribe(
      data=>{
      console.log(data);
      this.RestService.initializerestaurant(data);
       for (let numero = 0; numero < Object.keys(data).length; numero++)  {
        this.Restaurantearray.push(new RestauranteClass(data[numero].nombre,"","data[numero].Imagen",data[numero].id));
        }   
    //console.log(data[0].Nombre);
  //  this.toastgeneral(this.Restaurantearray[3].Nombre);

      
      },
      err=>{
    console.log("no funciono");

      }
    
    
    );


  }

  ionViewDidLoad() {

  }
  showinfo(){
    this.alertgeneral("agregar","Cantidad de mesas disponibles, ordenes en cola y tiempo de espera")
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



OpenMenuPage(Restaurante: string ){
var obj={RestNombre:Restaurante};
this.RestService.ChosenRestaurant(Restaurante);
//Verificacion de si se encuentra en el restaurante
this.Numerodemesas();
this.navCtrl.push(HomePage,obj);

}


Numerodemesas() {
    let prompt = this.alertCtrl.create({
      title: "Indicar # Mesa",
      message: "Su numero de mesa se encuentra....FALTA VERIFICACION SI SE ENCUENTRA",
      inputs: [
        {
          name: '# Mesa',
          placeholder: '# Mesa'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Listo',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


}




