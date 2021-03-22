import { Component } from '@angular/core';
import {
  NavController,
  ToastController
} from 'ionic-angular';
import { SliderPage } from '../slider/slider';
import { Events } from 'ionic-angular/util/events';
import { Storage } from '@ionic/storage';
import { HomePage } from '../../main/home/home';



@Component({
  selector: 'land-component',
  templateUrl: "./land.html",
})
export class LandComponent {
  HomePage = HomePage;
 

  constructor(
    private navController: NavController,
    public events: Events,
    private storage: Storage
  ) {
    events.publish('hideHeader', { isHidden: true });
    
  }

  ngOnInit() {


    this.storage.get('installed').then((val) => {
      if (val) {
        setTimeout(() => {
          this.events.publish('hideHeader', { isHidden: false });
          this.navController.setRoot(HomePage);
        }, 2500);
      }
      else {
        setTimeout(() => {
          this.navController.setRoot(SliderPage);
        }, 2500);
      }
    });
  }
}