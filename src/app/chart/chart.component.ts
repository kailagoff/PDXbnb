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
  public doughnutChartData:number[] = [128.86, 64.37, 109.89];
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
  public barChartLabels:string[] = ['Montavilla', 'Richmond', 'Foster-Powell', 'Brooklyn', 'Woodstock', 'Mt. Tabor', 'Buckman', 'Sellwood-Moreland'];
  public barChartType:string = 'bar';

  public barChartColors: Array<any> = [{}];
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [119, 126, 103, 120, 134, 141, 156, 181], label: 'Entire Room/Apt', backgroundColor:["#90D7FF", "#90D7FF", "#90D7FF", "#90D7FF", "#90D7FF", "#90D7FF", "#90D7FF", "#90D7FF", "#90D7FF"]},
    {data: [57, 62, 57, 61, 62, 65, 72, 60], label: 'Private Room', backgroundColor:["#BFD0E0", "#BFD0E0", "#BFD0E0", "#BFD0E0", "#BFD0E0", "#BFD0E0", "#BFD0E0", "#BFD0E0", "#BFD0E0"]},
    {data: [31, 36, 0, 27, 0, 0, 69, 33], label: 'Shared Room', backgroundColor:["#C9F9FF", "#C9F9FF", "#C9F9FF", "#C9F9FF", "#C9F9FF", "#C9F9FF", "#C9F9FF", "#C9F9FF", "#C9F9FF"]}
  ];
  //ne bar chart
  public neBarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public neBarChartLabels:string[] = ['Lloyd', 'Irvington', 'Roseway', 'Eliot', 'Cully', 'Woodlawn'];
  public neBarChartType:string = 'bar';

  public neBarChartColors: Array<any> = [{}];
  public neBarChartLegend:boolean = true;

  public neBarChartData:any[] = [
    {data: [144, 129, 126, 129, 117, 124 ], label: 'Entire Room/Apt', backgroundColor:["#E1B07E", "#E1B07E", "#E1B07E", "#E1B07E", "#E1B07E", "#E1B07E", "#E1B07E", "#E1B07E", "#E1B07E"]},
    {data: [47, 85, 62, 79, 56, 55 ], label: 'Private Room', backgroundColor:["#E5BE9E", "#E5BE9E", "#E5BE9E", "#E5BE9E", "#E5BE9E", "#E5BE9E", "#E5BE9E", "#E5BE9E", "#E5BE9E"]},
    {data: [0, 37, 36, 0, 0, 0], label: 'Shared Room', backgroundColor:["#CBC0AD", "#CBC0AD", "#CBC0AD", "#CBC0AD", "#CBC0AD", "#CBC0AD", "#CBC0AD", "#CBC0AD", "#CBC0AD"]}
  ];

  //nportland bar chart
  public nBarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public nBarChartLabels:string[] = ['Kenton', 'Cathederal Park', 'Arbor Lodge', 'Overlook', 'St. Johns', 'Portsmouth', 'Bridgeton'];
  public nBarChartType:string = 'bar';

  public nBarChartColors: Array<any> = [{}];
  public nBarChartLegend:boolean = true;

  public nBarChartData:any[] = [
    {data: [105, 111, 115, 132, 75, 107, 173], label: 'Entire Room/Apt', backgroundColor:["#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F"]},
    {data: [55, 56, 62, 61, 49, 56, 93], label: 'Private Room', backgroundColor:["#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A"]},
    {data: [0, 0, 0, 27, 0, 0, 0], label: 'Shared Room', backgroundColor:["#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B"]}
  ];

  //sw portland bar chart
  public swBarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public swBarChartLabels:string[] = ['Hillsdale', 'Hayhurst', 'Homestead', 'Downtown', 'Maplewood'];
  public swBarChartType:string = 'bar';

  public swBarChartColors: Array<any> = [{}];
  public swBarChartLegend:boolean = true;

  public swBarChartData:any[] = [
    {data: [151, 119, 124, 233, 142], label: 'Entire Room/Apt', backgroundColor:["#283044", "#283044", "#283044", "#283044", "#283044"]},
    {data: [72, 64, 72, 77, 63], label: 'Private Room', backgroundColor:["#A9BCD0", "#A9BCD0", "#A9BCD0", "#A9BCD0", "#A9BCD0"]},
    {data: [0, 0, 47, 45, 45], label: 'Shared Room', backgroundColor:["#78A1BB", "#78A1BB", "#78A1BB", "#78A1BB", "#78A1BB"]}
  ];

  //nw portland bar chart
  public nwBarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public nwBarChartLabels:string[] = ['Linnton', 'Forest Park', 'Pearl', 'Chinatown-Old Town', 'Northwest'];
  public nwBarChartType:string = 'bar';

  public nwBarChartColors: Array<any> = [{}];
  public nwBarChartLegend:boolean = true;

  public nwBarChartData:any[] = [
    {data: [116, 217, 196, 114, 155], label: 'Entire Room/Apt', backgroundColor:["#F2CCC3", "#F2CCC3", "#F2CCC3", "#F2CCC3", "#F2CCC3", "#F2CCC3", "#F2CCC3", "#F2CCC3", "#F2CCC3"]},
    {data: [77, 103, 123, 111, 83], label: 'Private Room', backgroundColor:["#E78F8E", "#E78F8E", "#E78F8E", "#E78F8E", "#E78F8E", "#E78F8E", "#E78F8E", "#E78F8E", "#E78F8E"]},
    {data: [0, 0, 54, 43, 37], label: 'Shared Room', backgroundColor:["#FFE6E8", "#FFE6E8", "#FFE6E8", "#FFE6E8", "#FFE6E8", "#FFE6E8", "#FFE6E8", "#FFE6E8", "#FFE6E8"]}
  ];

  //price by quadrant
  public lineChartData:Array<any> = [
    {data: [86, 92, 91, 91, 91, 90, 82, 86, 90, 90, 90, 95], label: 'North'},
    {data: [130, 130, 127, 130, 127, 115, 114, 109, 112, 114, 133, 121], label: 'Northwest'},
    {data: [104, 104, 106, 122, 124, 100, 95, 96, 107, 111, 109, 114], label: 'Southwest'},
    {data: [96, 96, 92, 90, 96, 89, 88, 89, 93, 95, 96, 97], label: 'Southeast'},
    {data: [98, 101, 107, 104, 98, 89, 85, 86, 87, 87, 92, 90], label: 'Northeast'}
  ];
  public lineChartLabels:Array<any> = ['July 2016', 'Aug. 2016', 'Sept. 2016', 'Oct. 2016', 'Nov. 2016', 'Jan. 2017', 'Feb. 2017', 'March 2017', 'April 2017', 'May 2017', 'June 2017', 'July 2017'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
}
