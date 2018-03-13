import {Injectable} from '@angular/core';


@Injectable()
export class RestService{

private Rest:any;    
private chosenRest:String;

constructor(){





} 


initializerestaurant(rest:any){
    this.Rest=rest;
    console.log(this.Rest);
    
    }

ChosenRestaurant(chosenRest:any)
{
this.chosenRest=chosenRest;

}

GetChosenRestaurant(){

    return this.chosenRest;

}




}