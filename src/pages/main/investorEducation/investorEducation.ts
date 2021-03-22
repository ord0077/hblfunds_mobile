import { Component, ViewChild } from '@angular/core';
import { NavController, App,  Tabs } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PensionCalculator } from '../pensionCalculator/pensionCalculator';
import { RiskCalculator } from '../riskCalculator/riskCalculator';
import {TaxCalculator} from '../taxCalculator/taxCalculator';
import { CalculatorPage } from '../calculator/calculator';
import {WhyHblAml} from '../whyHblAml/whyHblAml';
import {SavingInvestment} from '../savingInvestment/savingInvestment';
import {TaxRebate} from '../taxRebate/taxRebate';
import {FaqMutualFunds} from '../faqMutualFunds/faqMutualFunds';
import {FaqPensionFunds} from '../faqPensionFunds/faqPensionFunds';
import {Videos} from '../videos/videos';

@Component({
  selector: 'investorEdu',
  templateUrl: 'investorEducation.html'
})
export class InvestorEducation {

  nav ;
  public WhyHblAml = WhyHblAml;
  public PensionCalculator = PensionCalculator;
  public RiskCalculator = RiskCalculator;
  public TaxCalculator = TaxCalculator;
  public CalculatorPage = CalculatorPage;
  public SavingInvestment = SavingInvestment;
  public TaxRebate = TaxRebate;
  public FaqMutualFunds = FaqMutualFunds;
  public FaqPensionFunds = FaqPensionFunds;
  public Videos = Videos;


  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser
  ) {
    
  
  }

  public goto(page) {
    this.navCtrl.push(page);
  }
  public gotoYoutube () {
    const browser = this.iab.create('https://www.youtube.com/channel/UC7YV_cx3FohQspOXKUOnblA', '_blank', {location: 'no', toolbar: 'yes'});
  }

}
