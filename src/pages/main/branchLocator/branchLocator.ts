import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'page-branch',
  templateUrl: 'branchLocator.html'
})
export class BranchLocator {
  data: any = {Region: []};
  regions: any;
  selected: any = {};
  branches :any = {};
  branchSelected :any;
  branchesForSelect: any = [];
  objectKeys = Object.keys;

  constructor(public navCtrl: NavController, private http: HttpClient) {
    
    this.http.get("assets/map.json").subscribe(data=>{
      this.regions = Object.keys(data);
      this.data = data;
  }); 

  }

  regionChange() {
    this.branchSelected = undefined;
    this.branches = {};
    const selectedRegion = this.data[this.selected.region];
    selectedRegion.forEach(branch => {
      this.branches[branch.BranchName] = branch;
    });
    this.branchesForSelect = Object.keys(this.branches);
  }

  branchChange() {
   this.branchSelected = this.branches[this.selected.branch];
  }

}
