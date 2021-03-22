import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Storage} from '@ionic/storage';
import { MomentModule } from 'angular2-moment';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html'
})
@Pipe({
  name: 'date',
})
export class NavComponent {
  users: any[] = [];

  constructor(public navCtrl: NavController,public moment: MomentModule, private http: Http, public storage: Storage) {
    setTimeout(() => {
   
    this.http.get('https://hblasset.com/hblMobileAPI/navs.php').subscribe(data => {
    this.users = data.json();
     });
   }, 100);
   }
 }