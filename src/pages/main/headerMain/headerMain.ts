import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';
import { NavComponent } from '../nav/nav';
import { AboutPage } from '../about/about';
import { RiskCalculator } from '../riskCalculator/riskCalculator';
import { HomePage } from '../home/home';
import { StocksHome } from '../stocksHome/stocksHome';
import { ReportsComponent } from '../reports/reports';

@Component({
  selector: 'header-main',
  templateUrl: 'headerMain.html'
})
export class HeaderMainComponent {

  private navCtrl;
  public showBackButton = false;
  calculator = CalculatorPage;
  navComponent = NavComponent;
  AboutPage = AboutPage;
  StocksHome = StocksHome
  reportsComponent = ReportsComponent;
  RiskCalculator = RiskCalculator;
  HomePage = HomePage;
  constructor(
    private app: App,
  ) {
    this.navCtrl = this.app.getActiveNav();
  }

  public goToHome() {
    if (this.navCtrl.getActive().component !== HomePage) {
      this.navCtrl.setRoot(HomePage, null, {animate: true, animation: 'ios-transition', direction: 'back'});
    }
  }

  public goto(page) {
    if (this.navCtrl.getActive().component !== page) {
      this.navCtrl.setRoot(page, null, {animate: true, animation: 'ios-transition', direction: 'forward'});
    }
  }

  ngAfterViewInit() {
    this.navCtrl.viewDidEnter.subscribe((data) => {
      if (data.instance.appCtrl) {
        this.showBackButton = false;
      }
      else {
        this.showBackButton = true;
      }
    });

  }
}
