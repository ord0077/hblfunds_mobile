import { Component, ViewChild } from '@angular/core';
import { NavController, App,  Tabs } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {HowToInvest} from '../howToInvest/howToInvest';
import {ValueAddedServices} from '../valueAddedServices/valueAddedServices';


@Component({
  selector: 'investorServ',
  templateUrl: 'investorServices.html'
})
export class InvestorServices {

  nav ;
  public ValueAddedServices = ValueAddedServices;
  public HowToInvest = HowToInvest;;


  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser
  ) {
    
  }

  public goto(page) {
    this.navCtrl.push(page);
  }

}
