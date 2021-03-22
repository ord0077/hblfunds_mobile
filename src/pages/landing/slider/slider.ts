import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';


@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})
export class SliderPage {

  constructor(
    public navCtrl: NavController,
    public events: Events
  ) {
    
   
  }

  ionViewWillLeave() {
    //Make footer visiable while leaving the page.
    this.events.publish('hideHeader', { isHidden: false });
  }

}
