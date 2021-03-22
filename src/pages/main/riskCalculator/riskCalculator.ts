import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'riskCal',
  templateUrl: 'riskCalculator.html'
})


export class RiskCalculator {

	data: any = {};	

	dataArrayConventional = [
		{
			min: -20,
			max: -12,
			riskLevel: 'High',
			conventional: 'Conventional: Money Market Fund OR Cash Fund'
		},{
			min: -11,
			max: -6,
			riskLevel: 'Slight',
			conventional: 'Conventional: Income Fund OR Government Securities Fund'
		},{
			min: -5,
			max: 0,
			riskLevel: 'Moderate',
			conventional: 'Conventional: FPF Conservative Plan'
		},{
			min: 1,
			max: 6,
			riskLevel: 'Moderate',
			conventional: 'Conventional: Multi Asset Fund'
		},{
			min: 7,
			max: 12,
			riskLevel: 'Conventional: Moderate to High',
			conventional: 'Conventional: FPF Active Allocation Plan'
		},{
			min: 13,
			max: 20,
			riskLevel: 'High',
			conventional: 'Conventional: Stock Market Fund OR Energy Fund'
		}
	];

	dataArrayIslamic = [
		{
			min: -20,
			max: -12,
			riskLevel: 'Low',
			islamic: 'Islamic: Islamic Money Market Fund'
		},{
			min: -11,
			max: -6,
			riskLevel: 'Slight',
			islamic: 'Islamic: Islamic Income Fund'
		},{
			min: -5,
			max: 6,
			riskLevel: 'Moderate',
			islamic: 'Islamic: Islamic Asset Allocation Fund OR IFPF Conservative Plan'
		},{
			min: 7,
			max: 12,
			riskLevel: 'Moderate',
			islamic: 'Islamic: IFPF Active Allocation Plan'
		},{
			min: 13,
			max: 20,
			riskLevel: 'Moderate to High',
			islamic: 'Islamic: Islamic Stock Fund OR Equity Fund OR Islamic Equity Fund'
		}
	];
	

	total: number;
	result: any;
	
	selector;
	constructor(public navCtrl: NavController) {
		
	   
	}
	
	onSubmit (data){
		this.total = parseInt(data.answer1) + parseInt(data.answer2) + parseInt(data.answer3) + parseInt(data.answer4) + parseInt(data.answer5) + parseInt(data.answer6) + parseInt(data.answer7) + parseInt(data.answer8);
	if(data.select === 'any'){
		this.result = {
			conventional: this.showConventionalData(this.total, data).conventional,
			islamic: this.showIslamicData(this.total, data).islamic
			
		};
	}
	else if (data.select === 'islamic'){
		this.result = this.showIslamicData(this.total, data);
	}
	else{
		this.result = this.showConventionalData(this.total, data);
	}
	}


	showConventionalData(total, data){
		let result : any;
		for(let i = 0; i<this.dataArrayConventional.length; i++){
			if(total > this.dataArrayConventional[i].min && total < this.dataArrayConventional[i].max){
				result = this.dataArrayConventional[i];
				break;
			}}
		return result;
	}

	showIslamicData(total, data){
		let result: any;
		for(let i = 0; i<this.dataArrayIslamic.length; i++){
			if(total > this.dataArrayIslamic[i].min && total < this.dataArrayIslamic[i].max){
				result = this.dataArrayIslamic[i];
				break;
			}}
			return result;
			
	}
	
	clearForm(){
		this.data = {};	
		this.result ='';
  }
}
