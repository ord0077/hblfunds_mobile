import { Component} from '@angular/core';
import { NavController, App,  Tabs } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {Settings} from '../settings/settings';
import {BranchLocator} from '../branchLocator/branchLocator';
import { ContactPage } from '../contact/contact';
import {FollowUs} from '../followUs/followUs';


@Component({
  selector: 'footer-main',
  templateUrl: 'footerMain.html'
})
export class FooterMainComponent {
  private navCtrl;
  public Settings = Settings;
  public ContactPage = ContactPage;
  public FollowUs = FollowUs;
  public BranchLocator = BranchLocator;;
 
  today
  constructor(
    private app: App,
  
  ) {
    this.navCtrl = app.getActiveNav(); 
    this.today= new Date().getFullYear();
  }

  public goto(page) {
    this.navCtrl.push(page);
  }

}
