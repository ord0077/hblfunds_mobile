import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { CashFunds } from './cashFunds/cashFunds';
import { MoneyMarketFund } from './moneyMarketFund/moneyMarketFund';
import { GovernmentSecuritiesFund } from './governmentSecuritiesFund/governmentSecuritiesFund';
import { IncomeFund } from './incomeFund/incomeFund';




@Component({
  templateUrl: 'moneyMarket.html',
})
export class MoneyMarket {

  public cashFundsTab = CashFunds;
  public moneyMarketFundTab = MoneyMarketFund;
  public governmentSecuritiesFund = GovernmentSecuritiesFund;
  public incomeFund = IncomeFund;

  constructor(
    public navCtrl: NavController
  ) {
    
  }

  public goto(page) {
    this.navCtrl.push(page);
  }

}
