import { MenuService } from './../../providers/MenuService';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  menu:any;
hola: any=true;
    shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public menuService : MenuService,  
  ) {
  }

  ionViewDidLoad() {
this.menu=this.navParams.get('menu');
console.log(this.menu);
      
  
  }

  checkboxchangeexcluyente(){

console.log("excluyente");
  }

  checkboxchangeincluyente(){

console.log("incluyente");
  }

  excluyenteoincluyente(number:any){
    if(number==1){
      return true;
    }
      return false;
  }


tienesubmenu(menu:any){
var prueba=false;
if(menu.submenu!=""){
prueba=true;
}
return prueba;
  
}


 toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
      }
  };
  isGroupShown(group) {
      return this.shownGroup === group;
  };

  sumarcantidad(index:any){
      
       this.menu[index].cantidad=this.menu[index].cantidad+1;

      this.menuService.cambiarvalorescantidad(this.menu[index].cantidad,index);
      

  }

   restarcantidad(index:any){
      if(this.menu[index].cantidad>0){
        this.menu[index].cantidad=this.menu[index].cantidad-1;
         this.menuService.cambiarvalorescantidad(this.menu[index].cantidad,index);
   }
      

  }

}
