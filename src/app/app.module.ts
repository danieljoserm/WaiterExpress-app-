
import { RestService } from './../providers/RestService';
import { PaymentmethodPage } from './../pages/paymentmethod/paymentmethod';
import { CardlistPage } from './../pages/cardlist/cardlist';

import { MenuService } from './../providers/MenuService';
import { MenuPage } from './../pages/menu/menu';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { RestaurantePage } from './../pages/restaurante/restaurante';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule,Http} from '@angular/http';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { RequestOptions } from '@angular/http';

//import {TranslateLoader} from '@ngx-translate/http-loader';
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
//npm install @ngx-translate/core @ngx-translate/http-loader@0.1.0 --save
@NgModule({
  declarations: [
    MyApp,
    HomePage,RestaurantePage,LoginPage,RegisterPage,MenuPage,CardlistPage,PaymentmethodPage
  ],
  imports: [

    SuperTabsModule.forRoot(),
 
    HttpModule,
        BrowserModule,
    IonicModule.forRoot(MyApp),
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,RestaurantePage,LoginPage,RegisterPage,MenuPage,CardlistPage,PaymentmethodPage
  ],
  providers: [
    RestService ,
    MenuService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
