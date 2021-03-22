import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {HttpClient} from '@angular/common/http';
@Component({
  templateUrl: 'financialReports.html',
})
export class FinancialReports {
  reports;
  title;
  constructor(public app: App, private http: HttpClient , private iab: InAppBrowser) {
    this.http.get('http://orangeroomdigital.com/hbl-financial-reports/financial-reports.php').subscribe(data => {
      this.reports = data[0];
      this.title = data[1]["heading"];
    });
  }
  public goToPdf(url){
    this.iab.create(url, '_system', {location: 'no', toolbar: 'yes'});
  }
}