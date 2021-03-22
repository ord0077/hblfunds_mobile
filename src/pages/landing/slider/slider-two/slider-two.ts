import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../../main/home/home';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'slider-two',
  templateUrl: 'slider-two.html'
})
export class SliderTwoComponent {
  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    
  ) {
    
  }

  public goto() {
    this.navCtrl.setRoot(HomePage);
    this.storage.set('installed', true);
  }
}
