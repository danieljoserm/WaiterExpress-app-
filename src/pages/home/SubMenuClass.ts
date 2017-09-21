import { SubMenuItemsClass } from './SubMenuItemsClass';
export class SubMenuClass{

submenu_categoria : string;
submenu_tipo : string;
submenu_items: SubMenuItemsClass[];




public constructor(submenucategoria:string,submenutipo:string ){
this.submenu_categoria=submenucategoria;
this.submenu_tipo=submenutipo;
this.submenu_items=[];
}

setSubmenuItemsData(submenuItem :string,submenustate:boolean){

this.submenu_items.push( new SubMenuItemsClass(submenuItem,submenustate));

}




}