import { PaymentmethodPage } from './../paymentmethod/paymentmethod';
import { CardlistPage } from './../cardlist/cardlist';
import { MenuService } from './../../providers/MenuService';
import { MenuPage } from './../menu/menu';
import { pruebaclass } from './pruebaclass';
import { SubMenuItemsClass } from './SubMenuItemsClass';
import { MenuClass } from './MenuClass';
import { SubMenuClass } from './SubmenuClass';
import { Http } from '@angular/http';
import { LoginPage } from './../login/login';
import { RestaurantePage } from './../restaurante/restaurante';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {deserialize} from "serializer.ts/Serializer";
import {serialize} from "serializer.ts/Serializer";
import {SuperTabsController} from 'ionic2-super-tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

cartnumber : any =0;
tabmenu : any = MenuPage;
menuany : any; 
categoriafilter:any;
Menu : MenuClass[]=[];
menyany1 :any;
tabbolean: boolean=false;
  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public navParams :NavParams,
    public http :Http,
    public superTabsCtrl: SuperTabsController,
    public menuService : MenuService,
    public event : Events
  ) { 

 let DataLocal = this.http.get('assets/fakeinfo/menu.json').map(res => res.json()).subscribe(
   

  data=>{


    this.menuany=data;
    this.categoriafilter=this.Rmduplicateitems();
  this.menuany=this.Addstatetosubitems(this.menuany);
  this.menuService.setMenuEntrada(this.menuany);




    this.tabbolean=true;
      },
      err=>{
    console.log("no funciono");

      }
    
    
    );

    this.event.subscribe("cambiarvalor",(valor)=>{

this.cartnumber=this.cartnumber+valor;

    })

    }

  ionViewDidLoad(){
this.superTabsCtrl.enableTabSwipe(this.tabmenu,true);

 
  }

  booleancartnumber(){
    if(this.cartnumber>0){
      return true;
    }
    else{
      return false;
    }
  }

  sumarcart(){
  this.cartnumber++;  

  }
  Restarcart(){
this.cartnumber--;  

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

pagarbuton(){

  this.navCtrl.push(PaymentmethodPage);
  this.alertgeneral("agregar","seleccion de pago, el numero rojo representa las ordenes en cola");
}


//no se usa queda por si acaso pero lo mas probable es que se borre.
ParseJSONtoMenuClass(menu:any,Menuclass : MenuClass[] )
{  
    for (let numero = 0; numero < Object.keys(menu).length; numero++)  {
  

      this.Menu.push(new MenuClass(menu[numero].id_producto,menu[numero].categoria,menu[numero].nombre_producto,menu[numero].precio))
      if(menu[numero].submenu!=""){

        for(let numero1 = 0; numero1 < Object.keys(menu[numero].submenu).length; numero1++){

           

          this.Menu[numero].submenu.push(new SubMenuClass(menu[numero].submenu[numero1].submenu_categoria,menu[numero].submenu[numero1].submenu_tipo));

            for(let numero2 = 0; numero2 < Object.keys(menu[numero].submenu[numero1].submenu_items).length; numero2++){

              this.Menu[numero].submenu[numero1].submenu_items.push(new SubMenuItemsClass(menu[numero].submenu[numero1].submenu_items[numero2].nombre_submenu_items,false));

            }
        
        
          }

      }
   
      

    }

}

Addstatetosubitems(menu:any)
{  
    for (let numero = 0; numero < Object.keys(menu).length; numero++)  {
  
      menu[numero].cantidad=0;
      menu[numero].index=numero;
    
      if(menu[numero].submenu!=""){

        for(let numero1 = 0; numero1 < Object.keys(menu[numero].submenu).length; numero1++){

           

         

            for(let numero2 = 0; numero2 < Object.keys(menu[numero].submenu[numero1].submenu_items).length; numero2++){

            menu[numero].submenu[numero1].submenu_items[numero2].estado=false;

            }
        
        
          }

      }
   
      

    }
    return menu;

}

categoryfilter(category : string){
var menuprobando;

menuprobando=this.menuany.filter(function(menu){
return menu.categoria==category;


});

return {menu:menuprobando};

}

Rmduplicateitems(){
var list;
list = this.menuany.filter((item,index,self)=> self.findIndex((t)=>{return t.categoria==item.categoria})== index)

return list;





}




}
