import { Component, ViewChild } from '@angular/core';
import { NavController, App,  Tabs } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MutualCalculator } from '../mutualCalculator/mutualCalculator';
import {PensionCalculator} from '../pensionCalculator/pensionCalculator';


@Component({
  selector: 'taxCalc',
  templateUrl: 'taxCalculator.html'
})
export class TaxCalculator {

  nav ;
  public PensionCalculator = PensionCalculator;
  public MutualCalculator = MutualCalculator;;


  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser
  ) {
    
  }

  public goto(page) {
    this.navCtrl.push(page);
  }

}
