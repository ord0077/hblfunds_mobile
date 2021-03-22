import { Component } from '@angular/core';
import { MoneyMarket } from '../amlfunds/moneyMarket/moneyMarket';
import { EquityFunds } from '../amlfunds/equityFunds/equityFunds';
import { ShariahCompliantFunds } from '../amlfunds/shariahCompliantFunds/shariahCompliantFunds';
import { SeparatelyManagedAccounts } from '../amlfunds/separatelyManagedAccounts/separatelyManagedAccounts';
import { FinancialPlans } from '../amlfunds/financialPlans/financialPlans';
import { VoluntaryPensionScheme } from '../amlfunds/voluntaryPensionScheme/voluntaryPensionScheme';
import { App } from 'ionic-angular';
import { ReportsComponent } from '../reports/reports';
import { CustomerService } from '../customerService/customerService';
import { CalculatorPage } from '../calculator/calculator';
import { RetirementCalculator } from '../retirementCalculator/retirementCalculator';
import { NavComponent } from '../nav/nav';
import { NewsComponent } from '../news/news';
import { AboutPage } from '../about/about';
import { RiskCalculator } from '../riskCalculator/riskCalculator';
import {TaxCalculator} from '../taxCalculator/taxCalculator';
import {AmlFunds} from '../amlfunds/amlfunds';
import {InvestorEducation} from '../investorEducation/investorEducation';
import {InvestorServices} from '../investorServices/investorServices';
import {Settings} from '../settings/settings';
import { StocksHome } from '../stocksHome/stocksHome';


@Component({
  selector: 'sidebar-main',
  templateUrl: 'sidebarMain.html'
})
export class SidebarMain {

  moneyMarkettab = MoneyMarket;
  equityFunds = EquityFunds;
  shariahCompliantFunds = ShariahCompliantFunds;
  separatelyManagedAccounts = SeparatelyManagedAccounts;
  financialPlans = FinancialPlans;
  voluntaryPensionScheme = VoluntaryPensionScheme;
  reportsComponent = ReportsComponent;
  customerService = CustomerService;
  CalculatorPage = CalculatorPage;
  RetirementCalculator = RetirementCalculator;
  navComponent = NavComponent;
  newsComponent = NewsComponent;
  RiskCalculator = RiskCalculator;
  TaxCalculator = TaxCalculator;
  AmlFunds = AmlFunds;
  InvestorEducation = InvestorEducation;
  AboutPage = AboutPage;
  InvestorServices = InvestorServices;
  Settings = Settings;
  StocksHome = StocksHome;
  constructor(
    private app: App
  ) {
    
  }

  

  public goto(page) {
    const nav = this.app.getActiveNav();
    nav.push(page);
  }
}
