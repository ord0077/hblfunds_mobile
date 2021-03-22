import { Component, ViewChild } from '@angular/core';
import { NavController, App,  Tabs } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {TaxCalculator} from '../taxCalculator/taxCalculator';
import {RetirementCalculator} from '../retirementCalculator/retirementCalculator';


@Component({
  selector: 'calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {

  nav ;
  public TaxCalculator = TaxCalculator;
  public RetirementCalculator = RetirementCalculator;;


  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser
  ) {
    
  }

  public goto(page) {
    this.navCtrl.push(page);
  }

}
