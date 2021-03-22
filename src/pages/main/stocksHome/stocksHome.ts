import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { TopStocks } from '../topStocks/topStocks';
import * as HighCharts from 'highcharts';

@Component({
  templateUrl: 'stocksHome.html',
})
export class StocksHome {
  Highcharts = HighCharts;
  chartOptions: any;
  allNews: any;
  seriesData = [];
  segments = 'indices';
  sections = 'kse100';
  baseUrl = 'http://202.163.111.197:3000/';
  dawnUrl = `https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.dawn.com%2Ffeeds%2Fbusiness`;
  exchange: any;
  kse100: any;
  kse30: any;
  kmi30: any;
  selectedStock: any;
  lastUpdated = '';
  marketOpen = false;

  constructor(public navController: NavController, private http: Http) {
    this.getDawnRss();
    this.getSeriesData();
    this.getExchange();
  }

  getDawnRss() {
    this.http.get(this.dawnUrl).subscribe((data) => {
      this.allNews = data.json().items;
      console.log(this.allNews);
    });
  }

  getSeriesData() {
    this.http.get(`${this.baseUrl}exchange/all`)
      .subscribe((data) => {
        this.seriesData = data.json();
        this.chartOptions = this.setChartData(this.seriesData, 'kse100');
        console.log(this.seriesData);
      });
    setTimeout(() => this.getSeriesData(), 1000 * 60 * 5);
  }

  private getExchange() {
    this.http.get(`${this.baseUrl}exchange`).subscribe(data => {
      let response = data.json();
      this.exchange = response.data;
      let date = new Date(response.time);
      this.lastUpdated = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      let currentDate = new Date(response.serverTime);
      if (currentDate.getHours() >= 9 && currentDate.getHours() <= 16 && currentDate.getDay() >= 1 && currentDate.getDay() <= 5) {
        this.marketOpen = true
      }
      this.kse100 = this.exchange[0];
      this.kse30 = this.exchange[2];
      this.kmi30 = this.exchange[3];
      this.kse100.percentage = this.kse100.change / this.kse100.currentIndex * 100;
      this.kse100.volume = this.kse100.totalTurnover / 1000000;
      this.kse30.percentage = this.kse30.change / this.kse30.currentIndex * 100;
      this.kse30.volume = this.kse30.totalTurnover / 1000000;
      this.kmi30.percentage = this.kmi30.change / this.kmi30.currentIndex * 100;
      this.kmi30.volume = this.kmi30.totalTurnover / 1000000;
      this.selectedStock = this.kse100;
    });
    setTimeout(() => this.getExchange(), 1000 * 60 * 5); // 5 minute interval
  }

  select(section) {
    this.sections = section;
    switch (section) {
      case 'kse100':
        this.selectedStock = this.kse100;
        this.chartOptions = this.setChartData(this.seriesData, 'kse100');
        break;
      case 'kse30':
        this.selectedStock = this.kse30;
        this.chartOptions = this.setChartData(this.seriesData, 'kse30');
        break;
      case 'kmi30':
        this.selectedStock = this.kmi30;
        this.chartOptions = this.setChartData(this.seriesData, 'kmi30');
        break;
    }
  }

  setChartData(data, stock) {
    let series = data.map(item => {
      if (stock === 'kse100') {
        return [item.time, parseFloat(item.data[0].currentIndex)];
      } else if (stock === 'kse30') {
        return [item.time, parseFloat(item.data[2].currentIndex)];
      } else if (stock === 'kmi30') {
        return [item.time, parseFloat(item.data[3].currentIndex)];
      }
    });
    let name = ''
    switch (stock) {
      case 'kse100':
        name = 'KSE 100';
        break;
      case 'kse30':
        name = 'KSE 30';
        break;
      case 'kmi30':
        name = 'KMI 30';
        break;
    }

    return {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: name
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: null
        }
      },
      legend: {
        enabled: false
      },
      time: {
        timezoneOffset: new Date().getTimezoneOffset()
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, this.Highcharts.getOptions().colors[0]],
              // [1, this.Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'line',
        name: name,
        data: series,
        color: '#008269'
      }]
    }
  }

  navigateTop() {
    this.navController.push(TopStocks)
  }


}
