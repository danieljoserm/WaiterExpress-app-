import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  private ServerUrl: String="http://35.232.60.68/backend";

  constructor(public http: Http) {
    console.log('Hello GlobalProvider Provider');
  }

  GetServerUrl(){
    
        return this.ServerUrl;
    
      }
    

}
