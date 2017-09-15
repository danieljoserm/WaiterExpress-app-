import { SharedModule } from './../../app/shared/SharedModule';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantePage } from './restaurante';

@NgModule({
  declarations: [
    RestaurantePage,
  ],
  imports: [
  SharedModule,
    IonicPageModule.forChild(RestaurantePage),
  ],
})
export class RestaurantePageModule {}
