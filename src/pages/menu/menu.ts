
import { MenuService } from './../../providers/MenuService';
import { PopoverController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Events}  from 'ionic-angular';
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
popover : any;
    shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public menuService : MenuService, 
  public popoverCtrl:PopoverController,
  public toastCtrl: ToastController,
  public event: Events,
  ) {
  }

  ionViewWillEnter(){
  

}


ionViewWillLeave(){
  this.toastgeneral("mefui");

}
  ionViewDidLoad() {
this.menu=this.navParams.get('menu');
//console.log(this.menu);
      
  
  }

 
  checkboxchangeexcluyente(index:any,submenuindex,submenuitemsindex:any){

this.menuService.Cambiarvaloressubitems(index,submenuindex,submenuitemsindex);
console.log(index+","+submenuindex+","+submenuitemsindex)
console.log("excluyente");
  }

  checkboxchangeincluyente(index:any,submenuindex,submenuitemsindex:any){
this.menuService.Cambiarvaloressubitems(index,submenuindex,submenuitemsindex);
console.log(index+","+submenuindex+","+submenuitemsindex)
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

  sumarcantidad(index:any, indexglobal:any){
      
       this.menu[index].cantidad=this.menu[index].cantidad+1;

      this.menuService.cambiarvalorescantidad(this.menu[index].cantidad,indexglobal);
   this.event.publish("cambiarvalor",1); 

  }

   restarcantidad(index:any , indexglobal:any){
      if(this.menu[index].cantidad>0){
        this.menu[index].cantidad=this.menu[index].cantidad-1;
         this.menuService.cambiarvalorescantidad(this.menu[index].cantidad,indexglobal);
          this.event.publish("cambiarvalor",-1); 
      
   }

      

  }

  toastgeneral(message :string){
      let toast = this.toastCtrl.create({
                    message: message,
                    duration: 3000
                  });
                  toast.present();
}



}
//(ionChange)="checkboxchangeincluyente(i,j,y)"