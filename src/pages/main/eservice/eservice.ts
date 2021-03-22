import {Component, ViewChild} from '@angular/core';
import {NavController, App, Tabs} from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';

@Component({
    templateUrl: 'eservice.html'
})
export class Eservice{
    constructor(
        public navCtrl: NavController,
        private iab: InAppBrowser
    ){

    }
    public goto(page){
        this.navCtrl.push(page);
    }
}