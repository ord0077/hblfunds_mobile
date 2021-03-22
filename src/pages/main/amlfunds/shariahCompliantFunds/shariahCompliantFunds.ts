import { Component } from '@angular/core';
import { NavController, App, Tabs } from 'ionic-angular';
import { IslamicStockFund } from './islamicStockFund/islamicStockFund';
import { IslamicMoneyMarketFund } from './islamicMoneyMarketFund/islamicMoneyMarketFund';
import { IslamicIncomeFund } from './islamicIncomeFund/islamicIncomeFund';
import { IslamicEquityFund } from './islamicEquityFund/islamicEquityFund';
import { IslamicAssetAllocationFund } from './islamicAssetAllocationFund/islamicAssetAllocationFund';



@Component({
  templateUrl: 'shariahCompliantFunds.html',
})
export class ShariahCompliantFunds {

  islamicStockFund = IslamicStockFund;
  islamicMoneyMarketFund = IslamicMoneyMarketFund;
  islamicIncomeFund = IslamicIncomeFund;
  islamicEquityFund = IslamicEquityFund;
  islamicAssetAllocationFund = IslamicAssetAllocationFund;


  constructor(
    public navCtrl: NavController
  ) {
   
  }

  public goto(page) {
    this.navCtrl.push(page);
  }

}
