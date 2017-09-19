export class RestauranteClass {

    Nombre: string;
    BSSID : string; 
    Imagen : string;
    ID : string

public constructor(Nombre : string,BSSID:string,Imagen:string,ID:string){
this.Nombre=Nombre;
this.BSSID=Nombre;
this.Imagen=Imagen;
this.ID=ID;


}

getNombre(){
    return this.Nombre;
}







}