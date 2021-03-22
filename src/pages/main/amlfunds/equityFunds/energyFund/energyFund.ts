import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { SMS } from '@ionic-native/sms';
@Component({
  templateUrl: 'energyFund.html',
})
export class EnergyFund {
  users: any[] = [];

  constructor(public navCtrl: NavController, private http: Http, private smsVar: SMS) {
    setTimeout(() => {
      this.http.get('https://hblasset.com/hblMobileAPI/navs.php').subscribe(data => {
       this.users = data.json();
     });
   }, 100);
  }
  
  sendSMS(){
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    }
    this.smsVar.send('9300', 'invest',options)
      .then(()=>{
        
      },()=>{
     
      });
  }
}
