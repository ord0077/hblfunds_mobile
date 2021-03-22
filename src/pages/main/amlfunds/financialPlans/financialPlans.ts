import { Component } from '@angular/core';
import { NavController, App, Tabs } from 'ionic-angular';
import { FiancialPlanningFund } from './fiancialPlanningFund/fiancialPlanningFund';
import { IslamicFinancialPlanningFund } from './islamicFinancialPlanningFund/islamicFinancialPlanningFund';



@Component({
  templateUrl: 'financialPlans.html',
})
export class FinancialPlans {

  fiancialPlanningFund = FiancialPlanningFund;
  islamicFinancialPlanningFund = IslamicFinancialPlanningFund;

  constructor(
    public navCtrl: NavController
   
  ) {
    
  }

  public goto(page) {
    this.navCtrl.push(page);
  }

}
