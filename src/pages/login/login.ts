import { HomePage } from './../home/home';
import { RestaurantePage } from './../restaurante/restaurante';
import { RegisterPage } from './../register/register';
import {FormBuilder,FormGroup} from '@angular/forms';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 credentialsForm : FormGroup;
    
     

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder : FormBuilder,
  
     ) {

      this.credentialsForm = this.formBuilder.group({
        email:[''],
        password:['']
      })


      

  }


  ionViewDidLoad() {
   
  }


  OpenRegisterPage(){

  this.navCtrl.push(RegisterPage);  


  }
  OpenRestaurantePage(){

  this.navCtrl.push(RestaurantePage);  


  }


}
