import { SharedModule } from './../../app/shared/SharedModule';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
