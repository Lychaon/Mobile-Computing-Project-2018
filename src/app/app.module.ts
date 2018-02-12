import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { MapsPage } from '../pages/maps/maps';
import { NearbyPage } from '../pages/nearby/nearby';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { EpPage } from '../pages/ep/ep';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    MapsPage,
    NearbyPage,
    AboutPage,
    SettingsPage,
    EpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    MapsPage,
    NearbyPage,
    AboutPage,
    SettingsPage,
    EpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
