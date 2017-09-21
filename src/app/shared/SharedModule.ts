
import { LoginPageModule } from './../../pages/login/login.module';
import { RestaurantePageModule } from './../../pages/restaurante/restaurante.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [
        CommonModule,
        TranslateModule,
   
    ]
})
export class SharedModule { }