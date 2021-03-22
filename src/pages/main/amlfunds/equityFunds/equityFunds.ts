import { Component } from '@angular/core';
import { NavController, App, Tabs } from 'ionic-angular';
import { EnergyFund } from './energyFund/energyFund';
import { EquityFund } from './equityFund/equityFund';
import { MultiAssetFund } from './multiAssetFund/multiAssetFund';
import { StockFund } from './stockFund/stockFund';



@Component({
  templateUrl: 'equityFunds.html',
})
export class EquityFunds {

  energyFund = EnergyFund;
  equityFund = EquityFund;
  multiAssetFund = MultiAssetFund;
  stockFund = StockFund;
  constructor(
    public navCtrl: NavController
    
  ) {
    
  }

  public goto(page) {
    this.navCtrl.push(page);
  }
}
