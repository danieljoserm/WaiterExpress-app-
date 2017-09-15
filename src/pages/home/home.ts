import { LoginPage } from './../login/login';
import { RestaurantePage } from './../restaurante/restaurante';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
  ) {   }

  ionViewDidLoad(){

    
 //  this.navCtrl.push(RestaurantePage);
//   this.navCtrl.push(LoginPage);
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


}
