import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';


@Component({
  selector: 'retirementCal',
  templateUrl: 'retirementCalculator.html'
})
export class RetirementCalculator {

  selector;
  data: any = {};
  result: any = {};
  lastCont = 0;
  constructor(public navCtrl: NavController) {
   
   
  }

  calculate() {
    this.result.tenor = this.data.retirement - this.data.present;
    if (this.data.present <= 30) {
      this.result.expectedReturn = 12.45;
    }
    else if (this.data.present > 30 && this.data.present <= 40) {
      this.result.expectedReturn = 11.95;
    }
    else if (this.data.present > 40 && this.data.present <= 50) {
      this.result.expectedReturn = 10.90;
    }
    else if (this.data.present > 50 && this.data.present <= 60) {
      this.result.expectedReturn = 9.80;
    }
    else if (this.data.present > 60 && this.data.present <= 70) {
      this.result.expectedReturn = 4.50;
    }
    const tenor = this.result.tenor;
    const contribution = parseInt(this.data.monthlyIncome) * parseFloat(this.data.contribution) / 100;
    const completeYearsData = this.calculateCompleteYears(tenor, contribution, this.result.expectedReturn);
    // this.result.contribution = this.data.monthlyIncome / this.data.contribution;
    this.result.contribution = Math.round(completeYearsData.contribution);
    this.result.balance = Math.round(completeYearsData.increment);
    this.result.profit = Math.round(completeYearsData.increment - completeYearsData.contribution);
    this.result.encashableRetirement = this.result.balance / 2;
    this.result.pensionableRetirement = this.result.balance - this.result.encashableRetirement;
    this.result.age65 = 5.45;
    this.result.age70 = 4.80;
    this.result.age75 = 4.20;
    if (this.data.retirement > 75) {
      this.result.age65 = 0;
      this.result.age70 = 0;
      this.result.age75 = 0;
    }
    else if (this.data.retirement > 70) {
      this.result.age65 = 0;
      this.result.age70 = 0;
    }
    else if (this.data.retirement > 65) {
      this.result.age65 = 0;
    }

  }

  calcExpectedReturn(contribution, expectedReturn, yearArray) {
    for (let i = 11; i > 0; i--) {
      yearArray.push(this.calculateOfOneMonth(contribution, expectedReturn, i));
    }
    return this.sumOfAllInObj(yearArray);
  }

  calculateOfOneMonth(contribution, expectedReturn, remainingMonth) {
    const expectedReturnCalc = contribution * (expectedReturn /100) / 12 * remainingMonth;
    const increment = expectedReturnCalc + contribution;
    const finalData = {
      expectedReturn: expectedReturnCalc,
      increment: increment,
      contribution: contribution
    };
    this.lastCont = finalData.contribution;
  //  console.log(finalData);
    return finalData;
  }

  calculateCompleteYears(tenor, contribution, expectedReturn) {
    this.lastCont = contribution;
    let now;
    for (let i = 1; i <= tenor; i++) {
      if (i === 1) {
        now = this.calcExpectedReturn(this.lastCont, expectedReturn,
          [this.calculateOfOneMonth(this.lastCont, expectedReturn, 12)]);
      }
      else {
        now = this.calcExpectedReturn(this.getNewNormalInc(this.lastCont), expectedReturn,
          [this.calculateOfOneMonth(this.getNewInc(now.increment, this.lastCont)
            , expectedReturn, 12)]);
        //console.log(now.increment);
      }
    }
    return now;
  }

  sumOfAllInObj(array) {
    const finalObj = {};
    for (let i = 0, _len = array.length; i < _len; i++) {
      for (let key in array[i]) {
        if (array[i].hasOwnProperty(key)) {
          if (finalObj[key] === undefined) {
            finalObj[key] = 0;
          }
          finalObj[key] += array[i][key];
        }
      }
    }
    return finalObj;
  }

  getNewInc (allInc, lastCont) {
    const actualInc = (parseInt(this.data.annual) + 100) / 100;
//    console.log(lastCont, actualInc, allInc);
    return allInc + (lastCont * actualInc);
  }

  getNewNormalInc(lastCont) {
    const actualInc = (parseInt(this.data.annual) + 100) / 100;
    return lastCont * actualInc;
  }
}
