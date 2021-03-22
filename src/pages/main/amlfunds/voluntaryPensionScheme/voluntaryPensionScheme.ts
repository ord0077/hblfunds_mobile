import { Component } from '@angular/core';
import { NavController, App, Tabs } from 'ionic-angular';
import { IslamicPensionFund } from './islamicPensionFund/islamicPensionFund';
import { PensionFund } from './pensionFund/pensionFund';

@Component({
  templateUrl: 'voluntaryPensionScheme.html',
})
export class VoluntaryPensionScheme {

  islamicPensionFund = IslamicPensionFund;
  pensionFund = PensionFund;



  constructor(
    public navCtrl: NavController
  ) {
    
  }

  public goto(page) {
    this.navCtrl.push(page);
  }

}
