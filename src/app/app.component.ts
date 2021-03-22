import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,App,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LandComponent } from '../pages/landing/land/land';
import { SliderPage } from '../pages/landing/slider/slider';
import { MainComponent } from '../pages/main/main';
import {Eservice} from '../pages/main/eservice/eservice';
import { StocksHome } from '../pages/main/stocksHome/stocksHome';

import { Events } from 'ionic-angular/util/events';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { AboutPage } from '../pages/main/about/about';
import { ContactPage } from '../pages/main/contact/contact';
import { HomePage } from '../pages/main/home/home';
import {MutualCalculator} from '../pages/main/mutualCalculator/mutualCalculator';

import { AmlFunds } from '../pages/main/amlfunds/amlfunds';
import { MoneyMarket } from '../pages/main/amlfunds/moneyMarket/moneyMarket';
import { CashFunds } from '../pages/main/amlfunds/moneyMarket/cashFunds/cashFunds';
import { MoneyMarketFund } from '../pages/main/amlfunds/moneyMarket/moneyMarketFund/moneyMarketFund';
import { GovernmentSecuritiesFund } from '../pages/main/amlfunds/moneyMarket/governmentSecuritiesFund/governmentSecuritiesFund';
import { IncomeFund } from '../pages/main/amlfunds/moneyMarket/incomeFund/incomeFund';
import { EquityFunds } from '../pages/main/amlfunds/equityFunds/equityFunds';
import { EnergyFund } from '../pages/main/amlfunds/equityFunds/energyFund/energyFund';
import { EquityFund } from '../pages/main/amlfunds/equityFunds/equityFund/equityFund';
import { MultiAssetFund } from '../pages/main/amlfunds/equityFunds/multiAssetFund/multiAssetFund';
import { StockFund } from '../pages/main/amlfunds/equityFunds/stockFund/stockFund';
import { IslamicAssetAllocationFund } from '../pages/main/amlfunds/shariahCompliantFunds/islamicAssetAllocationFund/islamicAssetAllocationFund';
import { ShariahCompliantFunds } from '../pages/main/amlfunds/shariahCompliantFunds/shariahCompliantFunds';
import { IslamicEquityFund } from '../pages/main/amlfunds/shariahCompliantFunds/islamicEquityFund/islamicEquityFund';
import { IslamicIncomeFund } from '../pages/main/amlfunds/shariahCompliantFunds/islamicIncomeFund/islamicIncomeFund';
import { IslamicMoneyMarketFund } from '../pages/main/amlfunds/shariahCompliantFunds/islamicMoneyMarketFund/islamicMoneyMarketFund';
import { IslamicStockFund } from '../pages/main/amlfunds/shariahCompliantFunds/islamicStockFund/islamicStockFund';
import { SeparatelyManagedAccounts } from '../pages/main/amlfunds/separatelyManagedAccounts/separatelyManagedAccounts';
import { FinancialPlans } from '../pages/main/amlfunds/financialPlans/financialPlans';
import { FiancialPlanningFund } from '../pages/main/amlfunds/financialPlans/fiancialPlanningFund/fiancialPlanningFund';
import { IslamicFinancialPlanningFund } from '../pages/main/amlfunds/financialPlans/islamicFinancialPlanningFund/islamicFinancialPlanningFund';
import { VoluntaryPensionScheme } from '../pages/main/amlfunds/voluntaryPensionScheme/voluntaryPensionScheme';
import { IslamicPensionFund } from '../pages/main/amlfunds/voluntaryPensionScheme/islamicPensionFund/islamicPensionFund';
import { PensionFund } from '../pages/main/amlfunds/voluntaryPensionScheme/pensionFund/pensionFund';
import { CalculatorPage } from '../pages/main/calculator/calculator';
import { ShrinkHeader } from '../pages/main/shrink-header/shrinkHeader';
import { NavComponent } from '../pages/main/nav/nav';
import { NewsComponent } from '../pages/main/news/news';
import { FinancialReports } from '../pages/main/reports/financialReports/financialReports';
import { FundManagerReports } from '../pages/main/reports/fundManagerReports/fundManagerReports';
import { CustomerService } from '../pages/main/customerService/customerService';
import { PensionCalculator } from '../pages/main/pensionCalculator/pensionCalculator';
import { ReportsComponent } from '../pages/main/reports/reports';
import { RiskCalculator } from '../pages/main/riskCalculator/riskCalculator';
import { TaxCalculator } from '../pages/main/taxCalculator/taxCalculator';
import {InvestorEducation} from '../pages/main/investorEducation/investorEducation';
import {WhyHblAml} from '../pages/main/whyHblAml/whyHblAml';
import {SavingInvestment} from '../pages/main/savingInvestment/savingInvestment';
import {TaxRebate} from '../pages/main/taxRebate/taxRebate';
import {FaqMutualFunds} from '../pages/main/faqMutualFunds/faqMutualFunds';
import {FaqPensionFunds} from '../pages/main/faqPensionFunds/faqPensionFunds';
import {Videos} from '../pages/main/videos/videos';
import {InvestorServices} from '../pages/main/investorServices/investorServices';
import {HowToInvest} from '../pages/main/howToInvest/howToInvest';
import {ValueAddedServices} from '../pages/main/valueAddedServices/valueAddedServices';
import {TellFriend} from '../pages/main/tellFriend/tellFriend';
import {AboutUs} from '../pages/main/aboutUs/aboutUs';
import {Settings} from '../pages/main/settings/settings';
import {BranchLocator} from '../pages/main/branchLocator/branchLocator';
import {FollowUs} from '../pages/main/followUs/followUs';
import { ListPage } from '../pages/list/list';
import { TopStocks } from '../pages/main/topStocks/topStocks';
import {RetirementCalculator} from '../pages/main/retirementCalculator/retirementCalculator';

@Component({
  templateUrl: 'app.html'
  
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LandComponent;
  //rootPage: any = HomePage;
  //rootPage: any = SliderPage;
  pages: Array<{title: string, component: any}>;
  public footerHeaderIsHidden: boolean = false;
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public events: Events,
    public ga: GoogleAnalytics,
    public app: App,
    public push: Push,
    public alertCtrl: AlertController
  ) {
    this.initializeApp();

    // this.ga.startTrackerWithId('UA-117407881-1')
    //   .then(() => {
    //     console.log('Google analytics is ready now');
    //     this.ga.trackView('Google analytics');
    //     // Tracker is ready
    //     // You can now track pages or set additional information such as AppVersion or UserId
    //   })
    //   .catch(e => console.log('Error starting GoogleAnalytics', e));

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Landing', component: LandComponent },
    ];

    events.subscribe('hideHeader', (data) => {
      this.footerHeaderIsHidden = data.isHidden;
    })
    
    this.app.viewWillEnter.subscribe(viewCtrl => {
      let abc = viewCtrl.component.name;
      console.log('azhar');
      console.log(abc);
      console.log(viewCtrl.component.name);
      if (abc=='LandComponent'){
        return document.body.classList.add(abc);
      }
      else if (abc=='SliderPage'){
        return document.body.classList.add(abc);
      }
      else if (abc=='HomePage'){
        return document.body.classList.remove('LandComponent','SliderPage');
      }
      
      this.ga.startTrackerWithId('UA-122269696-1')
      .then(() => {
        this.ga.trackView(abc);
        // Tracker is ready
        // You can now track pages or set additional information such as AppVersion or UserId
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));
      
    });
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initPushNotification()
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
   
    
  }
  initPushNotification() {
    if (!this.platform.is('cordova')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
      return;
    }
    this.push.hasPermission()
  .then((res: any) => {

    if (res.isEnabled) {
      console.log('We have permission to send push notifications');
    } else {
      console.log('We do not have permission to send push notifications');
    }

  });

// Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
this.push.createChannel({
 id: "testchannel1",
 description: "My first test channel",
 // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
 importance: 3
}).then(() => console.log('Channel created'));

// Delete a channel (Android O and above)
this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));

// Return a list of currently configured channels
this.push.listChannels().then((channels) => console.log('List of channels', channels))

    const options: PushOptions = {
      android: {
        senderID: '216399948077',
        vibrate : true,
        sound:true
      },
      ios: {
        alert: 'true',
        badge: false,
        sound: 'true'
      },
      windows: {}
    };
    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((data: any) => {
      console.log('device token -> ' + data.registrationId);
      localStorage.setItem('did',data.registrationId);
      localStorage.setItem("TOTO_Link", data);
    });

   

    pushObject.on('notification').subscribe((push: any) => {
      console.log('data -> ',push);
      if (push.additionalData.foreground) {
        let confirmAlert = this.alertCtrl.create({
          title: push.title,
          message: push.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              console.log("Open");
              //TODO: Your logic here
              let pagename = push.additionalData.page_name.split('"').join('');
              // JSON.stringify(push.additionalData.page_name)
              console.log("page namee :"+pagename);
              if (push.additionalData.page_name == "AboutPage") {
                this.nav.push(AboutPage);
              }
              else if (push.additionalData.page_name == "EnergyFund") {
                this.nav.push(EnergyFund);
              }
              else if (push.additionalData.page_name == "BranchLocator") {
                this.nav.push(BranchLocator);
              }
              else if (push.additionalData.page_name == "StocksHome") {
                this.nav.push(StocksHome);
              }
              
              
              
              else if (push.additionalData.page_name == "ListPage") {
                this.nav.push(ListPage);
              }
              else if (push.additionalData.page_name == "RetirementCalculator") {
                this.nav.push(RetirementCalculator);
              }
              
              else if (push.additionalData.page_name == "AboutPage") {
                this.nav.push(AboutPage);
              }
              else if (push.additionalData.page_name == "Eservice") {
                this.nav.push(Eservice);
              }
              
              else if (push.additionalData.page_name == "MutualCalculator") {
                this.nav.push(MutualCalculator);
              }
              
              else if (push.additionalData.page_name == "ContactPage") {
                this.nav.push(ContactPage);
              }
              else if (push.additionalData.page_name == "HomePage") {
                this.nav.push(HomePage);
              }
              else if (push.additionalData.page_name == "AmlFunds") {
                this.nav.push(AmlFunds);
              }
              else if (push.additionalData.page_name == "MoneyMarket") {
                this.nav.push(MoneyMarket);
              }
              else if (push.additionalData.page_name == "CashFunds") {
                this.nav.push(CashFunds);
              }
              else if (push.additionalData.page_name == "MoneyMarketFund") {
                this.nav.push(MoneyMarketFund);
              }
                else if (push.additionalData.page_name == "GovernmentSecuritiesFund") {
                this.nav.push(GovernmentSecuritiesFund);

              }  else if (push.additionalData.page_name == "IncomeFund") {
                this.nav.push(IncomeFund);
              }
              else if (push.additionalData.page_name == "EquityFunds") {
                this.nav.push(EquityFunds);
              }
              else if (push.additionalData.page_name == "EquityFund") {
                this.nav.push(EquityFund);
              }
              else if (push.additionalData.page_name == "MultiAssetFund") {
                this.nav.push(MultiAssetFund);
              }
              else if (push.additionalData.page_name == "StockFund") {
                this.nav.push(StockFund);
              }
              else if (push.additionalData.page_name == "IslamicAssetAllocationFund") {
                this.nav.push(IslamicAssetAllocationFund);
              }
              else if (push.additionalData.page_name == "ShariahCompliantFunds") {
                this.nav.push(ShariahCompliantFunds);
              }
              else if (push.additionalData.page_name == "IslamicEquityFund") {
                this.nav.push(IslamicEquityFund);
              }
              else if (push.additionalData.page_name == "IslamicIncomeFund") {
                this.nav.push(IslamicIncomeFund);
              }
              else if (push.additionalData.page_name == "IslamicMoneyMarketFund") {
                this.nav.push(IslamicMoneyMarketFund);
              }
              else if (push.additionalData.page_name == "IslamicStockFund") {
                this.nav.push(IslamicStockFund);
              }
              else if (push.additionalData.page_name == "SeparatelyManagedAccounts") {
                this.nav.push(SeparatelyManagedAccounts);
              }

              else if (push.additionalData.page_name == "FinancialPlans") {
                this.nav.push(FinancialPlans);
              }
              else if (push.additionalData.page_name == "FiancialPlanningFund") {
                this.nav.push(FiancialPlanningFund);
              }
              else if (push.additionalData.page_name == "IslamicFinancialPlanningFund") {
                this.nav.push(IslamicFinancialPlanningFund);
              }
              else if (push.additionalData.page_name == "VoluntaryPensionScheme") {
                this.nav.push(VoluntaryPensionScheme);
              }
              else if (push.additionalData.page_name == "IslamicPensionFund") {
                this.nav.push(IslamicPensionFund);
              }
              else if (push.additionalData.page_name == "PensionFund") {
                this.nav.push(PensionFund);
              }
              else if (push.additionalData.page_name == "CalculatorPage") {
                this.nav.push(CalculatorPage);
              }
              else if (push.additionalData.page_name == "ShrinkHeader") {
                this.nav.push(ShrinkHeader);
              }
              else if (push.additionalData.page_name == "NavComponent") {
                this.nav.push(NavComponent);
              }
              else if (push.additionalData.page_name == "NewsComponent") {
                this.nav.push(NewsComponent);
              }
              else if (push.additionalData.page_name == "FinancialReports") {
                this.nav.push(FinancialReports);
              }
              else if (push.additionalData.page_name == "FundManagerReports") {
                this.nav.push(FundManagerReports);
              }
              else if (push.additionalData.page_name == "CustomerService") {
                this.nav.push(CustomerService);
              }
              else if (push.additionalData.page_name == "PensionCalculator") {
                this.nav.push(PensionCalculator);
              }
              else if (push.additionalData.page_name == "ReportsComponent") {
                this.nav.push(ReportsComponent);
              }
              else if (push.additionalData.page_name == "RiskCalculator") {
                this.nav.push(RiskCalculator);
              }
              else if (push.additionalData.page_name == "TaxCalculator") {
                this.nav.push(TaxCalculator);
              }
              else if (push.additionalData.page_name == "InvestorEducation") {
                this.nav.push(InvestorEducation);
              }
              else if (push.additionalData.page_name == "WhyHblAml") {
                this.nav.push(WhyHblAml);
              }
              else if (push.additionalData.page_name == "SavingInvestment") {
                this.nav.push(SavingInvestment);
              }
              else if (push.additionalData.page_name == "TaxRebate") {
                this.nav.push(TaxRebate);
              }
              else if (push.additionalData.page_name == "FaqMutualFunds") {
                this.nav.push(FaqMutualFunds);
              }
              else if (push.additionalData.page_name == "FaqPensionFunds") {
                this.nav.push(FaqPensionFunds);
              }
              else if (push.additionalData.page_name == "Videos") {
                this.nav.push(Videos);
              }
              else if (push.additionalData.page_name == "InvestorServices") {
                this.nav.push(InvestorServices);
              }
              else if (push.additionalData.page_name == "HowToInvest") {
                this.nav.push(HowToInvest);
              }


              else if (push.additionalData.page_name == "ValueAddedServices") {
                this.nav.push(ValueAddedServices);
              }

              else if (push.additionalData.page_name == "TellFriend") {
                this.nav.push(TellFriend);
              }

              else if (push.additionalData.page_name == "Settings") {
                this.nav.push(Settings);
              }

              else if (push.additionalData.page_name == "BranchLocator") {
                this.nav.push(HowToInvest);
              }

              else if (push.additionalData.page_name == "FollowUs") {
                this.nav.push(FollowUs);
              }
              else if (push.additionalData.page_name == "TopStocks") {
                this.nav.push(TopStocks);
              }
              
            }
          }]
        });
        confirmAlert.present();
      } 
      else{
        console.log("not response");
        if (!push.additionalData.coldstart) {
          setTimeout(() => {
            if (push.additionalData.page_name == "AboutPage") {
              this.nav.push(AboutPage);
            }
            else if (push.additionalData.page_name == "StocksHome") {
              this.nav.push(StocksHome);
            }
            else if (push.additionalData.page_name == "MutualCalculator") {
              this.nav.push(MutualCalculator);
            }
            else if (push.additionalData.page_name == "Eservice") {
              this.nav.push(Eservice);
            }
            
            else if (push.additionalData.page_name == "EnergyFund") {
              this.nav.push(EnergyFund);
            }
            else if (push.additionalData.page_name == "RetirementCalculator") {
              this.nav.push(RetirementCalculator);
            }
            else if (push.additionalData.page_name == "BranchLocator") {
              this.nav.push(BranchLocator);
            }
            else if (push.additionalData.page_name == "ListPage") {
              this.nav.push(ListPage);
            }
            else if (push.additionalData.page_name == "AboutPage") {
              this.nav.push(AboutPage);
            }
            else if (push.additionalData.page_name == "ContactPage") {
              this.nav.push(ContactPage);
            }
            else if (push.additionalData.page_name == "HomePage") {
              this.nav.push(HomePage);
            }
            else if (push.additionalData.page_name == "AmlFunds") {
              this.nav.push(AmlFunds);
            }
            else if (push.additionalData.page_name == "MoneyMarket") {
              this.nav.push(MoneyMarket);
            }
            else if (push.additionalData.page_name == "CashFunds") {
              this.nav.push(CashFunds);
            }
            else if (push.additionalData.page_name == "MoneyMarketFund") {
              this.nav.push(MoneyMarketFund);
            }
              else if (push.additionalData.page_name == "GovernmentSecuritiesFund") {
              this.nav.push(GovernmentSecuritiesFund);

            }  else if (push.additionalData.page_name == "IncomeFund") {
              this.nav.push(IncomeFund);
            }
            else if (push.additionalData.page_name == "EquityFunds") {
              this.nav.push(EquityFunds);
            }
            else if (push.additionalData.page_name == "EquityFund") {
              this.nav.push(EquityFund);
            }
            else if (push.additionalData.page_name == "MultiAssetFund") {
              this.nav.push(MultiAssetFund);
            }
            else if (push.additionalData.page_name == "StockFund") {
              this.nav.push(StockFund);
            }
            else if (push.additionalData.page_name == "IslamicAssetAllocationFund") {
              this.nav.push(IslamicAssetAllocationFund);
            }
            else if (push.additionalData.page_name == "ShariahCompliantFunds") {
              this.nav.push(ShariahCompliantFunds);
            }
            else if (push.additionalData.page_name == "IslamicEquityFund") {
              this.nav.push(IslamicEquityFund);
            }
            else if (push.additionalData.page_name == "IslamicIncomeFund") {
              this.nav.push(IslamicIncomeFund);
            }
            else if (push.additionalData.page_name == "IslamicMoneyMarketFund") {
              this.nav.push(IslamicMoneyMarketFund);
            }
            else if (push.additionalData.page_name == "IslamicStockFund") {
              this.nav.push(IslamicStockFund);
            }
            else if (push.additionalData.page_name == "SeparatelyManagedAccounts") {
              this.nav.push(SeparatelyManagedAccounts);
            }

            else if (push.additionalData.page_name == "FinancialPlans") {
              this.nav.push(FinancialPlans);
            }
            else if (push.additionalData.page_name == "FiancialPlanningFund") {
              this.nav.push(FiancialPlanningFund);
            }
            else if (push.additionalData.page_name == "IslamicFinancialPlanningFund") {
              this.nav.push(IslamicFinancialPlanningFund);
            }
            else if (push.additionalData.page_name == "VoluntaryPensionScheme") {
              this.nav.push(VoluntaryPensionScheme);
            }
            else if (push.additionalData.page_name == "IslamicPensionFund") {
              this.nav.push(IslamicPensionFund);
            }
            else if (push.additionalData.page_name == "PensionFund") {
              this.nav.push(PensionFund);
            }
            else if (push.additionalData.page_name == "CalculatorPage") {
              this.nav.push(CalculatorPage);
            }
            else if (push.additionalData.page_name == "ShrinkHeader") {
              this.nav.push(ShrinkHeader);
            }
            else if (push.additionalData.page_name == "NavComponent") {
              this.nav.push(NavComponent);
            }
            else if (push.additionalData.page_name == "NewsComponent") {
              this.nav.push(NewsComponent);
            }
            else if (push.additionalData.page_name == "FinancialReports") {
              this.nav.push(FinancialReports);
            }
            else if (push.additionalData.page_name == "FundManagerReports") {
              this.nav.push(FundManagerReports);
            }
            else if (push.additionalData.page_name == "CustomerService") {
              this.nav.push(CustomerService);
            }
            else if (push.additionalData.page_name == "PensionCalculator") {
              this.nav.push(PensionCalculator);
            }
            else if (push.additionalData.page_name == "ReportsComponent") {
              this.nav.push(ReportsComponent);
            }
            else if (push.additionalData.page_name == "RiskCalculator") {
              this.nav.push(RiskCalculator);
            }
            else if (push.additionalData.page_name == "TaxCalculator") {
              this.nav.push(TaxCalculator);
            }
            else if (push.additionalData.page_name == "InvestorEducation") {
              this.nav.push(InvestorEducation);
            }
            else if (push.additionalData.page_name == "WhyHblAml") {
              this.nav.push(WhyHblAml);
            }
            else if (push.additionalData.page_name == "SavingInvestment") {
              this.nav.push(SavingInvestment);
            }
            else if (push.additionalData.page_name == "TaxRebate") {
              this.nav.push(TaxRebate);
            }
            else if (push.additionalData.page_name == "FaqMutualFunds") {
              this.nav.push(FaqMutualFunds);
            }
            else if (push.additionalData.page_name == "FaqPensionFunds") {
              this.nav.push(FaqPensionFunds);
            }
            else if (push.additionalData.page_name == "Videos") {
              this.nav.push(Videos);
            }
            else if (push.additionalData.page_name == "InvestorServices") {
              this.nav.push(InvestorServices);
            }
            else if (push.additionalData.page_name == "HowToInvest") {
              this.nav.push(HowToInvest);
            }


            else if (push.additionalData.page_name == "ValueAddedServices") {
              this.nav.push(ValueAddedServices);
            }

            else if (push.additionalData.page_name == "TellFriend") {
              this.nav.push(TellFriend);
            }

            else if (push.additionalData.page_name == "Settings") {
              this.nav.push(Settings);
            }

            else if (push.additionalData.page_name == "BranchLocator") {
              this.nav.push(HowToInvest);
            }

            else if (push.additionalData.page_name == "FollowUs") {
              this.nav.push(FollowUs);
            }
            else if (push.additionalData.page_name == "TopStocks") {
              this.nav.push(TopStocks);
            }
            
          }, 1500);
        } else {
          setTimeout(() => {
            if (push.additionalData.page_name == "AboutPage") {
              this.nav.push(AboutPage);
            }
            else if (push.additionalData.page_name == "BranchLocator") {
              this.nav.push(BranchLocator);
            } 
            else if (push.additionalData.page_name == "StocksHome") {
              this.nav.push(StocksHome);
            }
            else if (push.additionalData.page_name == "RetirementCalculator") {
              this.nav.push(RetirementCalculator);
            }
            else if (push.additionalData.page_name == "EnergyFund") {
              this.nav.push(EnergyFund);
            }
            else if (push.additionalData.page_name == "ListPage") {
              this.nav.push(ListPage);
            }
            else if (push.additionalData.page_name == "MutualCalculator") {
              this.nav.push(MutualCalculator);
            }
            
            else if (push.additionalData.page_name == "AboutPage") {
              this.nav.push(AboutPage);
            }
            else if (push.additionalData.page_name == "ContactPage") {
              this.nav.push(ContactPage);
            }
            else if (push.additionalData.page_name == "HomePage") {
              this.nav.push(HomePage);
            }
            else if (push.additionalData.page_name == "AmlFunds") {
              this.nav.push(AmlFunds);
            }
            else if (push.additionalData.page_name == "MoneyMarket") {
              this.nav.push(MoneyMarket);
            }
            else if (push.additionalData.page_name == "Eservice") {
              this.nav.push(Eservice);
            }
            
            else if (push.additionalData.page_name == "CashFunds") {
              this.nav.push(CashFunds);
            }
            else if (push.additionalData.page_name == "MoneyMarketFund") {
              this.nav.push(MoneyMarketFund);
            }
              else if (push.additionalData.page_name == "GovernmentSecuritiesFund") {
              this.nav.push(GovernmentSecuritiesFund);

            }  else if (push.additionalData.page_name == "IncomeFund") {
              this.nav.push(IncomeFund);
            }
            else if (push.additionalData.page_name == "EquityFunds") {
              this.nav.push(EquityFunds);
            }
            else if (push.additionalData.page_name == "EquityFund") {
              this.nav.push(EquityFund);
            }
            else if (push.additionalData.page_name == "MultiAssetFund") {
              this.nav.push(MultiAssetFund);
            }
            else if (push.additionalData.page_name == "StockFund") {
              this.nav.push(StockFund);
            }
            else if (push.additionalData.page_name == "IslamicAssetAllocationFund") {
              this.nav.push(IslamicAssetAllocationFund);
            }
            else if (push.additionalData.page_name == "ShariahCompliantFunds") {
              this.nav.push(ShariahCompliantFunds);
            }
            else if (push.additionalData.page_name == "IslamicEquityFund") {
              this.nav.push(IslamicEquityFund);
            }
            else if (push.additionalData.page_name == "IslamicIncomeFund") {
              this.nav.push(IslamicIncomeFund);
            }
            else if (push.additionalData.page_name == "IslamicMoneyMarketFund") {
              this.nav.push(IslamicMoneyMarketFund);
            }
            else if (push.additionalData.page_name == "IslamicStockFund") {
              this.nav.push(IslamicStockFund);
            }
            else if (push.additionalData.page_name == "SeparatelyManagedAccounts") {
              this.nav.push(SeparatelyManagedAccounts);
            }

            else if (push.additionalData.page_name == "FinancialPlans") {
              this.nav.push(FinancialPlans);
            }
            else if (push.additionalData.page_name == "FiancialPlanningFund") {
              this.nav.push(FiancialPlanningFund);
            }
            else if (push.additionalData.page_name == "IslamicFinancialPlanningFund") {
              this.nav.push(IslamicFinancialPlanningFund);
            }
            else if (push.additionalData.page_name == "VoluntaryPensionScheme") {
              this.nav.push(VoluntaryPensionScheme);
            }
            else if (push.additionalData.page_name == "IslamicPensionFund") {
              this.nav.push(IslamicPensionFund);
            }
            else if (push.additionalData.page_name == "PensionFund") {
              this.nav.push(PensionFund);
            }
            else if (push.additionalData.page_name == "CalculatorPage") {
              this.nav.push(CalculatorPage);
            }
            else if (push.additionalData.page_name == "ShrinkHeader") {
              this.nav.push(ShrinkHeader);
            }
            else if (push.additionalData.page_name == "NavComponent") {
              this.nav.push(NavComponent);
            }
            else if (push.additionalData.page_name == "NewsComponent") {
              this.nav.push(NewsComponent);
            }
            else if (push.additionalData.page_name == "FinancialReports") {
              this.nav.push(FinancialReports);
            }
            else if (push.additionalData.page_name == "FundManagerReports") {
              this.nav.push(FundManagerReports);
            }
            else if (push.additionalData.page_name == "CustomerService") {
              this.nav.push(CustomerService);
            }
            else if (push.additionalData.page_name == "PensionCalculator") {
              this.nav.push(PensionCalculator);
            }
            else if (push.additionalData.page_name == "ReportsComponent") {
              this.nav.push(ReportsComponent);
            }
            else if (push.additionalData.page_name == "RiskCalculator") {
              this.nav.push(RiskCalculator);
            }
            else if (push.additionalData.page_name == "TaxCalculator") {
              this.nav.push(TaxCalculator);
            }
            else if (push.additionalData.page_name == "InvestorEducation") {
              this.nav.push(InvestorEducation);
            }
            else if (push.additionalData.page_name == "WhyHblAml") {
              this.nav.push(WhyHblAml);
            }
            else if (push.additionalData.page_name == "SavingInvestment") {
              this.nav.push(SavingInvestment);
            }
            else if (push.additionalData.page_name == "TaxRebate") {
              this.nav.push(TaxRebate);
            }
            else if (push.additionalData.page_name == "FaqMutualFunds") {
              this.nav.push(FaqMutualFunds);
            }
            else if (push.additionalData.page_name == "FaqPensionFunds") {
              this.nav.push(FaqPensionFunds);
            }
            else if (push.additionalData.page_name == "Videos") {
              this.nav.push(Videos);
            }
            else if (push.additionalData.page_name == "InvestorServices") {
              this.nav.push(InvestorServices);
            }
            else if (push.additionalData.page_name == "HowToInvest") {
              this.nav.push(HowToInvest);
            }


            else if (push.additionalData.page_name == "ValueAddedServices") {
              this.nav.push(ValueAddedServices);
            }

            else if (push.additionalData.page_name == "TellFriend") {
              this.nav.push(TellFriend);
            }

            else if (push.additionalData.page_name == "Settings") {
              this.nav.push(Settings);
            }

            else if (push.additionalData.page_name == "BranchLocator") {
              this.nav.push(HowToInvest);
            }

            else if (push.additionalData.page_name == "FollowUs") {
              this.nav.push(FollowUs);
            }
            else if (push.additionalData.page_name == "TopStocks") {
              this.nav.push(TopStocks);
            }
            
          }, 3000);
        }
     
      }

    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin' + error));
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  
}
