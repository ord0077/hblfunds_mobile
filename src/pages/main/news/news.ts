import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  templateUrl: 'news.html',
})
export class NewsComponent {

  allNews = [];
  segments = 'home';
  constructor(
    public navController: NavController, 
    private http: Http,
    private iab: InAppBrowser
  ) {
    this.getDawnRss('home');
    
  }

  getDawnRss(type) {
    this.http.get(`https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.dawn.com%2Ffeeds%2F${type}`)
      .subscribe((data) => {
        this.allNews = data.json().items;
        console.log(this.allNews);
      });

  }

  public browse(url) {
    this.iab.create(url, '_blank', {location: 'no', toolbar: 'yes'});
  }
}
