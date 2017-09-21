import { SubMenuClass } from './SubmenuClass';


export class MenuClass{

id_producto: string;
categoria : string;
nombre_producto: string;
precio: string;
submenu : SubMenuClass[];


public constructor(IDproducto:string,categoria:string,nombreProducto:string,precio:string){
this.id_producto=IDproducto;
this.categoria=categoria;
this.nombre_producto=nombreProducto;
this.precio=precio;
this.submenu= [];



}


}