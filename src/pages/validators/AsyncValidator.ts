//This is not in used yet
import { FormControl } from '@angular/forms';

export class AsyncValidator {

 static checkUsername(control: FormControl): any {

   return new Promise(resolve => {

     //Fake a slow response from server

     setTimeout(() => {
       if(control.value.toLowerCase() === "greg"){

         resolve({
           "username taken": true
         });

       } else {
         resolve(null);
       }
     }, 2000);

   });
 }

}