import { Component } from '@angular/core';
import { NavController,App , Tabs  } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FundManagerReports } from '../reports/fundManagerReports/fundManagerReports';
import { FinancialReports } from '../reports/financialReports/financialReports';
@Component({
  templateUrl: 'reports.html',
})
export class ReportsComponent {

  nav ;
  public FinancialReports = FinancialReports;
  public FundManagerReports = FundManagerReports;;


  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser
  ) {
   
   
  }

  public goto(page) {
    this.navCtrl.push(page);
  }
}
