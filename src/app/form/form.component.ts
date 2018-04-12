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
  show: boolean = false;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(dataLastEmittedFromObserver => {
      this.hoodToDisplay = dataLastEmittedFromObserver;
      console.log(this.hoodToDisplay);
    })
  }

  submitForm(budget, month, room) {
    let num = 0;
    if (budget === "") {
      this.show = false;
      this.error = "Please enter valid number for search";
    } else {
      this.result = [];
      this.error = '';
      budget = parseInt(budget);
      if (month == 'January') {
        num = 5;
      } else if (month == 'February') {
        num = 6;
      } else if (month == 'March') {
        num = 7;
      } else if (month == 'April') {
        num = 8;
      } else if (month == 'May') {
        num = 9;
      } else if (month == 'June') {
        num = 10;
      } else if (month == 'July') {
        num = 11;
      } else if (month == 'August') {
        num = 1;
      } else if (month == 'September') {
        num = 2;
      } else if (month == 'October') {
        num = 3;
      } else if (month == 'November') {
        num = 4;
      } else {
        this.show = false;
        this.error = 'There was an error with the search';
      }
    }
    this.sortByFormData(num, budget, room);
    this.show = true;
  }

  sortByFormData(num, budget, room) {
    let month = this.hoodToDisplay[num];

    let arrNH = Object.entries(month).map(entry => Object.assign({value: entry[1]}, { key: entry[0] }));

    for(var j = 0; j < arrNH.length; j++) {
      let arrRT = Object.entries(arrNH[j].value).map(entry => Object.assign({value: entry[1]}, { key: entry[0] }));
      for (var l = 0; l < arrRT.length; l++) {
        if((arrRT[l].value.avgPrice <= budget) && (arrRT[l].key !== 'Total')) {
          if (room !== "All"){
            if(arrRT[l].key === room) {
              this.result.push([arrNH[j].key, arrRT[l].key, arrRT[l].value.avgPrice]);
            }
          }
          else {
            this.result.push([arrNH[j].key, arrRT[l].key, arrRT[l].value.avgPrice]);
          }
        }
      }
    }
  }
}
