import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'faq-Pension',
  templateUrl: 'faqPensionFunds.html'
})
export class FaqPensionFunds {
  users: any[] = [];

  constructor(public navCtrl: NavController, private http: Http) {
    

      this.http.get('assets/faqPension.json').subscribe(data => {
        this.users = data.json();
    }); 
  

  }

}
