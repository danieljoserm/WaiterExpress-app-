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

cambiarvalorescantidad(cantidad:any,index:any){

this.menu[index].cantidad=cantidad;
console.log(this.menu);

}

public returnmenu(){

return this.menu;

}




}