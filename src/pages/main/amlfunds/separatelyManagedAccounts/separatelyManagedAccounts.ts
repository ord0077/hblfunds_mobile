import { Component } from '@angular/core';
import { NavController, App, Tabs } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';


@Component({
  templateUrl: 'separatelyManagedAccounts.html',
})
export class SeparatelyManagedAccounts {



  constructor(
    private smsVar: SMS
  ) {
    
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
