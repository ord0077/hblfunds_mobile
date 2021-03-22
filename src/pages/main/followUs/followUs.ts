import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-follow',
  templateUrl: 'followUs.html'
})
export class FollowUs {

  constructor(public navCtrl: NavController,private iab: InAppBrowser) {
    
  }

  public gotoFB () {
    const browser = this.iab.create('https://m.facebook.com/HBLFunds/', '_blank', {location: 'no', toolbar: 'yes'});
  }
  public gotoTwitter () {
    const browser = this.iab.create('https://mobile.twitter.com/hblfunds?lang=en', '_blank', {location: 'no', toolbar: 'yes'});
  }
  public gotoLinkedin () {
    const browser = this.iab.create('https://www.linkedin.com/in/hblfunds/', '_blank', {location: 'no', toolbar: 'yes'});
  }
  public gotoYoutube () {
    const browser = this.iab.create('https://www.youtube.com/channel/UC7YV_cx3FohQspOXKUOnblA', '_blank', {location: 'no', toolbar: 'yes'});
  }
}
