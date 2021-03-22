import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-aboutU',
  templateUrl: 'aboutUs.html'
})
export class AboutUs {

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {
   
  }
 
  public gotoOrange(){
    const browser = this.iab.create('http://orangeroomdigital.com/', '_blank', {location: 'no', toolbar: 'yes'});
  }

}
