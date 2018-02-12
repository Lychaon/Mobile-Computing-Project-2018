import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../landing/landing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  loadLanding() {
    console.log('Heading to landing page');
    this.navCtrl.setRoot( LandingPage );   
  }

  slides = [
    {
      title: "Welcome to the <b>Kingston Tour</b>!",
      description: "<b>The Kingston Tour App</b> is a small, lightweight application that helps tourists find nearby hotspots and interesting areas.",
      image: "assets/imgs/slide-1.png"
    },
    {
      title: "Easy To Use",
      description: "<b>With</b> an intuitive design and a familiar color scheme and layout you'll feel right at home",
      image: "assets/imgs/slide-2.png"
    }
  ];

}
