import { Component } from '@angular/core';
import { NavController, App, Tabs } from 'ionic-angular';
import { MoneyMarket } from './moneyMarket/moneyMarket';
import { EquityFunds } from './equityFunds/equityFunds';
import { ShariahCompliantFunds } from './shariahCompliantFunds/shariahCompliantFunds';
import { SeparatelyManagedAccounts } from './separatelyManagedAccounts/separatelyManagedAccounts';
import { FinancialPlans } from './financialPlans/financialPlans';
import { VoluntaryPensionScheme } from './voluntaryPensionScheme/voluntaryPensionScheme';



@Component({
  templateUrl: 'amlfunds.html',
})
export class AmlFunds {

  moneyMarkettab = MoneyMarket;
  equityFunds = EquityFunds;
  shariahCompliantFunds = ShariahCompliantFunds;
  separatelyManagedAccounts = SeparatelyManagedAccounts;
  financialPlans = FinancialPlans;
  voluntaryPensionScheme = VoluntaryPensionScheme;

  constructor(
    public navCtrl: NavController
  ) {
   
   
  }

  public goto(page) {
    this.navCtrl.push(page);
  }
}
