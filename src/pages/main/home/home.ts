import { Component, ViewChild } from '@angular/core';
import { NavController, App, Tabs } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AmlFunds } from '../amlfunds/amlfunds';
import { AboutPage } from '../about/about';
import { ReportsComponent } from '../reports/reports';
import { InvestorEducation } from '../investorEducation/investorEducation';
import { InvestorServices } from '../investorServices/investorServices';
import { NewsComponent } from '../news/news';
import { StocksHome } from '../stocksHome/stocksHome';
import { RssProvider } from '../../../providers/rss/rss';
import { Device } from '@ionic-native/device'
import { Platform } from 'ionic-angular'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  nav;
  public tab2Root = AmlFunds;
  public AboutPage = AboutPage;
  public InvestorEducation = InvestorEducation;
  public reportsComponent = ReportsComponent;
  public InvestorServices = InvestorServices;
  public newsComponent = NewsComponent;
  public StocksHome = StocksHome;
  did: any;
  totoLink: any;
  device_type: any;
  browser: any;
  constructor(
    public navCtrl: NavController,
    // private device: Device,
    private platform: Platform,
    private iab: InAppBrowser,
    public appCtrl: App, public Rss: RssProvider,

  ) {
    this.nav = this.appCtrl.getRootNav();
    this.setDeviceID();

  }
  public gotoHbl() {
    this.iab.create('https://members.hblasset.com/', '_blank', { location: 'no', toolbar: 'yes' });
  }
  public gotohblaml() {
    this.iab.create('https://www.hblasset.com/contact/', '_blank', { location: 'no', toolbar: 'yes' });
  }

  public goto(page) {
    this.navCtrl.push(page);
  }
  setDeviceID() {
    this.did = localStorage.getItem('did');

    this.totoLink = localStorage.getItem('TOTO_Link');

    if (this.platform.is('android')) {
      this.device_type = "Andoid";
    }

    if (this.platform.is('ios')) {
      this.device_type = "iOS";
    }
    console.log("TOTO" + this.totoLink);

    console.log("TOTO2" + this.did);

    let data = {
      "device_id": this.did,
      "device_type": this.device_type
    }
    this.Rss.DeivceIdRegister(data).subscribe(res => {
      console.log("DeivceIdRegister () Response Data", res);

    },
      error => {
        console.log("error", error)
      }
    )
  }
}
