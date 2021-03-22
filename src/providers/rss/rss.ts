import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RssProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RssProvider {

  constructor(public http: Http) {
    console.log('Hello RssProvider Provider');
  }
  GetRSS(){
    const RSS_URL: any ='http://www.dawn.com/feeds/home';
    const API: any = 'bn2z3ibj5nas27njt9o9gftbrwcvtgbtvnhpmc1x';
    const count: any =20;
    const API_URL: any = 'https://api.rss2json.com/v1/api.json';
    const response = this.http.post(API_URL, {"rss_url": RSS_URL, 'api_key': API, 'count': count}).map(res => res.json());
    return response;
  }
  DeivceIdRegister(data) {
    console.log(data);
    
    return this.http.post('https://salesapp.hblasset.com/firebase/register-device', data)
      .map(res => res.json());
  }

}
