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

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(dataLastEmittedFromObserver => {
      this.hoodToDisplay = dataLastEmittedFromObserver;

      console.log(this.hoodToDisplay);
    })
  }
}
