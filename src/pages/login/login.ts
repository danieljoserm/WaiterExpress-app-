import { regexValidators } from './../validators/validator';
import { HomePage } from './../home/home';
import { RestaurantePage } from './../restaurante/restaurante';
import { RegisterPage } from './../register/register';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

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

 public submitAttempt : boolean =false; 
 public credentialsForm : FormGroup;
    
     

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder : FormBuilder,
  
     ) {
   
     
      this.credentialsForm = this.formBuilder.group({
        email:['',
        Validators.compose([     Validators.pattern(regexValidators.email), Validators.required      ])
        
       ],
        password:['', Validators.compose([ Validators.pattern(regexValidators.password), Validators.required

        ])
        
        
        ]
      })


      

  }


  ionViewDidLoad() {
   
  }


  OpenRegisterPage(){




  this.navCtrl.push(RegisterPage);  


  }
  OpenRestaurantePage(){

  this.submitAttempt = true;
  if(this.credentialsForm.valid){  

  this.navCtrl.push(RestaurantePage);  
  }

  }


}
