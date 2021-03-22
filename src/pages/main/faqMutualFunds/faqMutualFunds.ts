import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'faq-Mutual',
  templateUrl: 'faqMutualFunds.html'
})
export class FaqMutualFunds {
  users: any[] = [];

  constructor(public navCtrl: NavController, private http: Http) {

      this.http.get('assets/faqMutual.json').subscribe(data => {
        this.users = data.json();
    }); 

  }

}
