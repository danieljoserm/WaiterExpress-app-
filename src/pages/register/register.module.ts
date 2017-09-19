import { SharedModule } from './../../app/shared/SharedModule';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(RegisterPage),
  ],
})
export class RegisterPageModule {}
