import { Component } from '@angular/core';

import { AboutPage } from './about/about';
import { ContactPage } from './contact/contact';
import { HomePage } from './home/home';
import { AmlFunds } from './amlfunds/amlfunds';
import { NavController } from 'ionic-angular';
import { MoneyMarket } from './amlfunds/moneyMarket/moneyMarket';

@Component({
  templateUrl: 'main.html',
})
export class MainComponent {

  tab1Root = HomePage;
  tab2Root = AmlFunds;
  tab3Root = MoneyMarket;

  constructor(
    private navController: NavController,
  ) {

  }


  public switch() {
    console.log('cleick');
    this.navController.parent.select(2);
  }
}
