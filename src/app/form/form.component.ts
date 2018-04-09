import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DataService]
})
export class FormComponent implements OnInit {
  data: FirebaseListObservable<any[]>;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
     this.data = this.dataService.getData();
  }

}
