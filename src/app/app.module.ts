import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { RestaurantePage } from './../pages/restaurante/restaurante';
import { SharedModule } from './shared/SharedModule';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule,Http} from '@angular/http';
import {TranslateModule,TranslateLoader,TranslateStaticLoader} from 'ng2-translate';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';





@NgModule({
  declarations: [
    MyApp,
    HomePage,RestaurantePage,LoginPage,RegisterPage
  ],
  imports: [
    SharedModule,
 
    BrowserModule,
    IonicModule.forRoot(MyApp),
      TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
            deps: [Http]
        }),
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,RestaurantePage,LoginPage,RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
