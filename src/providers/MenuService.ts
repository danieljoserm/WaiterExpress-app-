import {Injectable} from '@angular/core';


@Injectable()
export class MenuService{

private menu:any;    
private menuseleccionados

constructor(){



} 


setMenuEntrada(menu:any){
this.menu=menu;
console.log(this.menu);

}



Cambiarvaloressubitems(index:any, indexsubmenu:any,indexsubmenuitem){


!this.menu[index].submenu[indexsubmenu].submenu_items[indexsubmenuitem].estado;


console.log(this.menu);






}

cambiarvaloresconidcantidad(cantidad:any,id:any){

    for (let numero = 0; numero < Object.keys(this.menu).length; numero++) {

        if(this.menu[numero].id==id){
            this.menu[numero].cantidad=cantidad;
        console.log(this.menu);
        }



    }
}


cambiarvalorescantidad(cantidad:any,index:any){

this.menu[index].cantidad=cantidad;
console.log(this.menu);

}

public returnmenu(){

return this.menu;

}




}