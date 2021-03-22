import { Component, ViewChild } from '@angular/core';
import { NavController, App,  Tabs } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {AboutUs} from '../aboutUs/aboutUs';
import {TellFriend} from '../tellFriend/tellFriend';


@Component({
  selector: 'page-set',
  templateUrl: 'settings.html'
})
export class Settings {

  nav ;
  public TellFriend = TellFriend;
  public AboutUs = AboutUs;;


  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser
  ) {
    
   
  }

  public goto(page) {
    this.navCtrl.push(page);
  }

}
