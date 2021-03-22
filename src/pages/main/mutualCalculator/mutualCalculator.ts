import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';


@Component({
  selector: 'mutualCal',
  templateUrl: 'mutualCalculator.html'
})
export class MutualCalculator {
  data: any = {};
  selector = 'salaried';
  public inactive:boolean = true;

  constructor(public navCtrl: NavController) {
   
   
  }
  changeStatus(){
    this.inactive = false;
 }

  invMadeChanged(invMade) {
    console.log('invMadeChanged called');
    this.data.invMade = invMade;
    this.calculateRebate(this.data.annual);
    console.log('invMade', invMade);
  }

  annualChanged(amount) {
    this.data.annual = amount;
    console.log('amount', amount);
    const maxInv = this.calcMaxInv(amount);
    this.data.maxInv = maxInv;
    this.invMadeChanged(maxInv);
  }

  selectorChanged(selector) {
    this.selector = selector;
    this.calculateRebate(this.data.annual);
  }

  calcMaxInv(amount) {
    const investment = amount * 0.2 < 2000000 ? amount * 0.2 : 2000000;
    return Math.floor(investment);
  }

  calcExceedingAmount(amount, method) {
    return amount - method;
  }

  calculateRebate(amount) {
    console.log('calculateRebateCalled', amount);
    // const maxInv = this.calcMaxInv(amount);
    let exceedingAmount = 0, annualIncomeTax = 0, taxRate, fixedAmount;
    if (this.selector === 'salaried') {
      if (amount >= 0 && amount <= 600000) {
        exceedingAmount = this.calcExceedingAmount(amount, 0);
        fixedAmount = 0;
        annualIncomeTax = (exceedingAmount * 0) + fixedAmount;
      }
      
      else if (amount >= 600001 && amount <= 1200000) {
        exceedingAmount = this.calcExceedingAmount(amount, 600000);
        fixedAmount = 0;
        annualIncomeTax = (exceedingAmount * 0.05) + fixedAmount;
      }

      else if (amount >= 1200001 && amount <= 1800000) {
        exceedingAmount = this.calcExceedingAmount(amount, 1200000);
        fixedAmount = 30000;
        annualIncomeTax = (exceedingAmount * 0.1) + fixedAmount;
      }

      else if (amount >= 1800001 && amount <= 2500000) {
        exceedingAmount = this.calcExceedingAmount(amount, 1800000);
        fixedAmount = 90000;
        annualIncomeTax = (exceedingAmount * 0.15) + fixedAmount;
      }

      else if (amount >= 2500001 && amount <= 3500000) {
        exceedingAmount = this.calcExceedingAmount(amount, 2500000);
        fixedAmount = 195000;
        annualIncomeTax = (exceedingAmount * 0.175) + fixedAmount;
      }

      else if (amount >= 3500001 && amount <= 5000000) {
        exceedingAmount = this.calcExceedingAmount(amount, 3500000);
        fixedAmount = 370000;
        annualIncomeTax = (exceedingAmount * 0.2) + fixedAmount;
      }

      else if (amount >= 5000001 && amount <= 8000000) {
        exceedingAmount = this.calcExceedingAmount(amount, 5000000);
        fixedAmount = 670000;
        annualIncomeTax = (exceedingAmount * 0.225) + fixedAmount;
      }

      else if (amount >= 8000001 && amount <= 12000000) {
        exceedingAmount = this.calcExceedingAmount(amount, 8000000);
        fixedAmount = 1345000;
        annualIncomeTax = (exceedingAmount * 0.25) + fixedAmount;
      }

      else if (amount >= 12000001 && amount <= 30000000) {
        exceedingAmount = this.calcExceedingAmount(amount, 12000000);
        fixedAmount = 2345000;
        annualIncomeTax = (exceedingAmount * 0.275) + fixedAmount;
      }

      else if (amount >= 30000001 && amount <= 50000000) {
        exceedingAmount = this.calcExceedingAmount(amount, 30000000);
        fixedAmount = 7295000;
        annualIncomeTax = (exceedingAmount * 0.3) + fixedAmount;
      }

      else if (amount >= 50000001 && amount <= 75000000) {
        exceedingAmount = this.calcExceedingAmount(amount, 50000000);
        fixedAmount = 13295000;
        annualIncomeTax = (exceedingAmount * 0.325) + fixedAmount;
      }

      else if (amount >= 75000001 && amount <= 999999999) {
        exceedingAmount = this.calcExceedingAmount(amount, 75000000);
        fixedAmount = 21420000;
        annualIncomeTax = (exceedingAmount * 0.35) + fixedAmount;
      }

    }
    else {
      if (amount < 400000 && amount >= 0) {
        exceedingAmount = this.calcExceedingAmount(amount, 0);
        fixedAmount = 0;
        annualIncomeTax = (exceedingAmount * 0) + fixedAmount;
      }

      else if (amount >= 400001 && amount <= 600000) {
        exceedingAmount = this.calcExceedingAmount(amount, 400000);
        fixedAmount = 0;
        annualIncomeTax = (exceedingAmount * 0.05) + fixedAmount;
      }

      else if (amount >= 600001 && amount <= 1200000) {
        exceedingAmount = this.calcExceedingAmount(amount, 600000);
        fixedAmount = 10000;
        annualIncomeTax = (exceedingAmount * 0.1) + fixedAmount;
      }

      else if (amount >= 1200001 && amount <= 2400000) {
        exceedingAmount = this.calcExceedingAmount(amount, 1200000);
        fixedAmount = 70000;
        annualIncomeTax = (exceedingAmount * 0.15) + fixedAmount;
      }

      else if (amount >= 2400001 && amount <= 3000000) {
        exceedingAmount = this.calcExceedingAmount(amount, 2400000);
        fixedAmount = 250000;
        annualIncomeTax = (exceedingAmount * 0.2) + fixedAmount;
      }

      else if (amount >= 3000001 && amount <= 4000000) {
        exceedingAmount = this.calcExceedingAmount(amount, 3000000);
        fixedAmount = 370000;
        annualIncomeTax = (exceedingAmount * 0.25) + fixedAmount;
      }

      else if (amount >= 4000001 && amount <= 6000000) {
        exceedingAmount = this.calcExceedingAmount(amount, 4000000);
        fixedAmount = 620000;
        annualIncomeTax = (exceedingAmount * 0.3) + fixedAmount;
      }

      else if (amount >= 6000001 && amount <= 999999999) {
        exceedingAmount = this.calcExceedingAmount(amount, 6000000);
        fixedAmount = 1220000;
        annualIncomeTax = (exceedingAmount * 0.35) + fixedAmount;
      }

    }
    taxRate = annualIncomeTax / amount;
    console.log('taxRate', taxRate);
    console.log('annualIncomeTax', annualIncomeTax);
    this.data.maxRebate = Math.round(this.data.maxInv * taxRate);
    console.log(this.data.maxInv);
    if (this.data.maxInv > this.data.invMade) {
      this.data.rebateAvl = Math.round(this.data.invMade * taxRate);
    }
    else {
      this.data.rebateAvl = Math.round(this.data.maxInv * taxRate);
    }
  }
}
