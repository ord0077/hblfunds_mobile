import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { LAZY_LOADED_TOKEN } from 'ionic-angular/util/module-loader';
import {NavController, ToastController} from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-tell',
  templateUrl: 'tellFriend.html'
})
export class TellFriend {
  message:any;
  constructor(private iab: InAppBrowser,public alertCtrl: AlertController, private smsVar: SMS ,public toastCtrl: ToastController) {
 
    
  
  }
  showEmail(){
    let alert = this.alertCtrl.create({
      title: 'Attention',
      message: 'Do you want to send an Email',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
        text: 'Ok',
        handler: () => {
          console.log('Ok')
        }
      }
      ]
    });
    alert.present();
  }

  showSMS(){
    let alert = this.alertCtrl.create({
      title: 'Attention',
      message: 'Do you want to send an SMS',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
          handler: () => {
            console.log('Canceled');
          }
        },
        {
        text: 'Ok',
        handler: () => {
          console.log('Ok')
        }
      }
      ]
    });
    alert.present();
  }
  public gotoFB () {
    const browser = this.iab.create('https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/HBLFunds/', '_blank', {location: 'no', toolbar: 'yes'});
  }
  sendSMS(){
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    }
    this.smsVar.send('', 'Check out “HBL Funds” mobile application for your smartphone. Download it today from Apple App Store.',options)
    .then(()=>{
        
      },()=>{
     
      });
  }


}
