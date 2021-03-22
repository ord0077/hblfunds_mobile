import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  templateUrl: 'topStocks.html',
})
export class TopStocks {
  baseUrl = 'http://202.163.111.197:3000/';
  segments = 'gainers';
  topGainers: any;
  topLoosers: any;
  topSector: any;
  topCompanies: any;
  error = false;

  constructor(public navController: NavController, private http: Http) {
    this.getGainers();
  }

  loadData(segment) {
    this.error = false;
    switch (segment) {
      case 'gainers':
        this.getGainers();
        break;
      case 'loosers':
        this.getLoosers();
        break;
      case 'sector':
        this.getSectors();
        break;
      case 'company':
        this.getCompanies();
        break;
    }
  }
  
  private getGainers() {
    this.http.get(`${this.baseUrl}topGainers`).subscribe((data) => {
      let response = data.json();
      this.topGainers = response.data;
      this.topGainers = this.topGainers.map((gainer) => {
        let stock = gainer;
        stock['percentage'] = gainer.change / gainer.currentPrice * 100;
        return stock;
      });
      console.log(this.topGainers);
    },
    err => this.error = true);
  }

  private getLoosers() {
    this.http.get(`${this.baseUrl}topLooser`).subscribe((data) => {
      let response = data.json();
      this.topLoosers = response.data;
      this.topLoosers = this.topLoosers.map((looser) => {
        let stock = looser;
        stock['percentage'] = looser.change / looser.currentPrice * 100;
        return stock;
      });
      console.log(this.topLoosers);
    },
    err => this.error = true);
  }

  private getSectors() {
    this.http.get(`${this.baseUrl}topSectors`).subscribe(data => {
      let response = data.json();
      this.topSector = response.data;
    },
    err => this.error = true);
  }

  private getCompanies() {
    this.http.get(`${this.baseUrl}topSymbols`).subscribe(data => {
      let response = data.json();
      this.topCompanies = response.data;
    },
    err => this.error = true);
  }
}

