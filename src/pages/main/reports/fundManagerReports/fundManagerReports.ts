import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { App } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
  templateUrl: 'fundManagerReports.html',
})
export class FundManagerReports {
  reports;
  constructor(public app: App, private http: HttpClient , private iab: InAppBrowser) {
    this.http.get('http://orangeroomdigital.com/fmrjson/fmr.php').subscribe(data => {
      this.reports = data;
    });
  }
  public goToPdf(url){
    this.iab.create(url, '_system', {location: 'no', toolbar: 'yes'});
  }
}