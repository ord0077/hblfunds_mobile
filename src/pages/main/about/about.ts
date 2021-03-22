import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  users: any[] = [];

  constructor(public navCtrl: NavController, private http: Http) {
    

    this.http.get("assets/HBLdata.json").subscribe((data)=>{
      this.users = data.json();
      console.log(this.users);
    })

  }

}
