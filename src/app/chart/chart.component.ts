import { ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  // template: '<canvas #donut></canvas>',
  styleUrls: ['./chart.component.scss'],
  providers: [DataService]
})

export class ChartComponent implements OnInit {
  data: FirebaseListObservable<any[]>;


  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }
  // Doughnut
  public doughnutChartLabels:string[] = ['Entire Home/Apt', 'Private Room', 'Shared Room'];
  public doughnutChartData:number[] = [129, 64, 41];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColors: Array<any> = [
    {
      backgroundColor:["#B8E0D2", "#95B8D1", "#809BCE"]
    }];

  // events
  public chartClicked(e:any):void { }

  public chartHovered(e:any):void { }
  // se bar chart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Brooklyn', 'Buckman', 'Hosford', 'Kerns', 'Mt. Tabor'];
  public barChartType:string = 'bar';

  public barChartColors: Array<any> = [{}];
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [120, 156, 143, 139, 141], label: 'Entire Room/Apt', backgroundColor:["#90D7FF", "#90D7FF", "#90D7FF", "#90D7FF", "#90D7FF", "#90D7FF", "#90D7FF", "#90D7FF", "#90D7FF"]},
    {data: [61, 72, 70, 71, 65], label: 'Private Room', backgroundColor:["#BFD0E0", "#BFD0E0", "#BFD0E0", "#BFD0E0", "#BFD0E0", "#BFD0E0", "#BFD0E0", "#BFD0E0", "#BFD0E0"]},
    {data: [27, 43, 25, 0, 0], label: 'Shared Room', backgroundColor:["#C9F9FF", "#C9F9FF", "#C9F9FF", "#C9F9FF", "#C9F9FF", "#C9F9FF", "#C9F9FF", "#C9F9FF", "#C9F9FF"]}
  ];
  //ne bar chart
  public neBarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public neBarChartLabels:string[] = ['Cully', 'Eliot', 'Irvington', 'Lloyd', 'Roseway', 'Woodlawn'];
  public neBarChartType:string = 'bar';

  public neBarChartColors: Array<any> = [{}];
  public neBarChartLegend:boolean = true;

  public neBarChartData:any[] = [
    {data: [118, 129, 129, 144, 126, 124], label: 'Entire Room/Apt', backgroundColor:["#E1B07E", "#E1B07E", "#E1B07E", "#E1B07E", "#E1B07E", "#E1B07E", "#E1B07E", "#E1B07E", "#E1B07E"]},
    {data: [55, 79, 85, 55, 62, 55], label: 'Private Room', backgroundColor:["#E5BE9E", "#E5BE9E", "#E5BE9E", "#E5BE9E", "#E5BE9E", "#E5BE9E", "#E5BE9E", "#E5BE9E", "#E5BE9E"]},
    {data: [0, 0, 37, 0, 36], label: 'Shared Room', backgroundColor:["#CBC0AD", "#CBC0AD", "#CBC0AD", "#CBC0AD", "#CBC0AD", "#CBC0AD", "#CBC0AD", "#CBC0AD", "#CBC0AD"]}
  ];

  //nportland bar chart
  public nBarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public nBarChartLabels:string[] = ['Arbor Lodge', 'Cathederal Park', 'Kenton', 'Overlook', 'St. Johns'];
  public nBarChartType:string = 'bar';

  public nBarChartColors: Array<any> = [{}];
  public nBarChartLegend:boolean = true;

  public nBarChartData:any[] = [
    {data: [115, 111, 105, 132, 75], label: 'Entire Room/Apt', backgroundColor:["#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F"]},
    {data: [62, 56, 55, 61, 49], label: 'Private Room', backgroundColor:["#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A"]},
    {data: [0, 0, 0, 27, 0], label: 'Shared Room', backgroundColor:["#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B"]}
  ];

  //sw portland bar chart
  public swBarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public swBarChartLabels:string[] = ['Downtown', 'Hayhurst', 'Hillsdale', 'Homestead', 'Maplewood-Ashcreek'];
  public swBarChartType:string = 'bar';

  public swBarChartColors: Array<any> = [{}];
  public swBarChartLegend:boolean = true;

  public swBarChartData:any[] = [
    {data: [233, 119, 151, 124, 142], label: 'Entire Room/Apt', backgroundColor:["#283044", "#283044", "#283044", "#283044", "#283044"]},
    {data: [77, 64, 72, 72, 63], label: 'Private Room', backgroundColor:["#A9BCD0", "#A9BCD0", "#A9BCD0", "#A9BCD0", "#A9BCD0"]},
    {data: [43, 0, 0, 47, 45], label: 'Shared Room', backgroundColor:["#78A1BB", "#78A1BB", "#78A1BB", "#78A1BB", "#78A1BB"]}
  ];

  //nw portland bar chart
  public nwBarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public nwBarChartLabels:string[] = ['Forest Park', 'Linnton', 'Northwest', 'Old Town-Chinatown', 'Pearl District'];
  public nwBarChartType:string = 'bar';

  public nwBarChartColors: Array<any> = [{}];
  public nwBarChartLegend:boolean = true;

  public nwBarChartData:any[] = [
    {data: [217, 116, 115, 114, 196], label: 'Entire Room/Apt', backgroundColor:["#F2CCC3", "#F2CCC3", "#F2CCC3", "#F2CCC3", "#F2CCC3", "#F2CCC3", "#F2CCC3", "#F2CCC3", "#F2CCC3"]},
    {data: [103, 77, 83, 111, 123], label: 'Private Room', backgroundColor:["#E78F8E", "#E78F8E", "#E78F8E", "#E78F8E", "#E78F8E", "#E78F8E", "#E78F8E", "#E78F8E", "#E78F8E"]},
    {data: [0, 0, 43, 43, 0], label: 'Shared Room', backgroundColor:["#FFE6E8", "#FFE6E8", "#FFE6E8", "#FFE6E8", "#FFE6E8", "#FFE6E8", "#FFE6E8", "#FFE6E8", "#FFE6E8"]}
  ];

  //price by quadrant
  public lineChartData:Array<any> = [
    //North
    {data: [86, 92, 91, 91, 91, 90, 82, 86, 90, 90, 90, 95], label: 'North', backgroundColor:["rgba(249, 74, 74, .1)"], borderColor:["rgba(249, 74, 74, 1)"]},
    {data: [130, 130, 127, 130, 127, 115, 114, 109, 112, 114, 133, 121], label: 'Northwest',  borderColor:["rgba(18, 181, 58, 1)"], backgroundColor:["rgba(18, 181, 58, .1)"]},
    {data: [104, 104, 106, 122, 124, 100, 95, 96, 107, 111, 109, 114], label: 'Southwest', borderColor:["rgba(44, 156, 232, 1)"], backgroundColor:["rgb(44, 156, 232, .1)"]},
    {data: [96, 96, 92, 90, 96, 89, 88, 89, 93, 95, 96, 97], label: 'Southeast', borderColor:["rgba(176, 111, 183, 1)"], backgroundColor:["rgba(176, 111, 183, .1)"]},
    {data: [98, 101, 107, 104, 98, 89, 85, 86, 87, 87, 92, 90], label: 'Northeast', borderColor:["rgba(255, 119, 0, 1)"], backgroundColor:["rgba(255, 119, 0, .1)"]}
  ];
  public lineChartLabels:Array<any> = ['July 2016', 'Aug. 2016', 'Sept. 2016', 'Oct. 2016', 'Nov. 2016', 'Jan. 2017', 'Feb. 2017', 'March 2017', 'April 2017', 'May 2017', 'June 2017', 'July 2017'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = ["#0095818D", "#00A1869E"];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
}
