import {Injectable} from '@angular/core';


@Injectable()
export class MenuService{

menu:any;    

constructor(){



} 


setMenuEntrada(menu:any){
this.menu=menu;
console.log(this.menu);

}



Cambiarvaloressubitems(menu : any){
var prueba;











}

cambiarvalorescantidad(cantidad:any,index:any){

this.menu[index].cantidad=cantidad;
console.log(this.menu);

}



}