import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DataService]
})
export class FormComponent implements OnInit {
  data: FirebaseListObservable<any[]>;
  hood: string;
  hoodToDisplay;
  error = "";
  result = [];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(dataLastEmittedFromObserver => {
      this.hoodToDisplay = dataLastEmittedFromObserver;
      console.log(this.hoodToDisplay);
    })
  }

  submitFormOne(budget, month) {
    if (budget === "") {
      this.error = "Please enter valid number for search";
    } else {
      this.result = [];
      this.error = '';
      budget = parseInt(budget);
      if (month == 'January') {
        let month =[];
        month = this.hoodToDisplay[5];
        let arrNH = Object.entries(month).map(entry => Object.assign({value: entry[1]}, { key: entry[0] }));
        for(var j = 0; j < arrNH.length; j++) {
          let arrRT = Object.entries(arrNH[0].value).map(entry => Object.assign({value: entry[1]}, { key: entry[0] }));
          for (var l = 0; l < arrRT.length; l++) {
            if((arrRT[l].value.avgPrice <= budget) && (arrRT[l].key !== 'Total')) {
              this.result.push([arrNH[j].key, arrRT[l].key, arrRT[l].value.avgPrice]);
            }
          }
        }
        console.log(this.result);
      }
      if (month == 'February') {
        this.result = this.hoodToDisplay[6].Alameda.Total.avgPrice;
        console.log(budget);
      }
      if (month == 'March') {
        this.result = this.hoodToDisplay[7].Alameda.Total.avgPrice;
        console.log(budget);
      }
      if (month == 'April') {
        this.result = this.hoodToDisplay[8].Alameda.Total.avgPrice;
        console.log(budget);
      }
      if (month == 'May') {
        this.result = this.hoodToDisplay[9].Alameda.Total.avgPrice;
        console.log(budget);
      }
      if (month == 'June') {
        this.result = this.hoodToDisplay[10].Alameda.Total.avgPrice;
        console.log(budget);
      }
      if (month == 'July') {
        this.result = this.hoodToDisplay[0].Alameda.Total.avgPrice;
        console.log(budget);
      }
      if (month == 'August') {
        this.result = this.hoodToDisplay[1].Alameda.Total.avgPrice;
        console.log(budget);
      }
      if (month == 'September') {
        this.result = this.hoodToDisplay[2].Alameda.Total.avgPrice;
        console.log(budget);
      }
      if (month == 'October') {
        this.result = this.hoodToDisplay[3].Alameda.Total.avgPrice;
        console.log(budget);
      }
      if (month == 'November') {
        this.result = this.hoodToDisplay[4].Alameda.Total.avgPrice;
        console.log(budget);
      }
    }
  }
}
