import { ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  // template: '<canvas #donut></canvas>',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent  {
  // Doughnut
  public doughnutChartLabels:string[] = ['Entire Home/Apt', 'Shared Room', 'Private Room'];
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
  public barChartLabels:string[] = ['Montavilla', 'Richmond', 'Foster-Powell', 'Brooklyn', 'Woodstock', 'Laurelhurst', 'Mt. Tabor', 'Buckman', 'Sellwood-Moreland'];
  public barChartType:string = 'bar';

  public barChartColors: Array<any> = [{}];
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40, 23, 32], label: 'Entire Room/Apt', backgroundColor:["#D56AA0", "#D56AA0", "#D56AA0", "#D56AA0", "#D56AA0", "#D56AA0", "#D56AA0", "#D56AA0", "#D56AA0"]},
    {data: [28, 48, 40, 19, 86, 27, 90, 23, 32], label: 'Private Room', backgroundColor:["#F8C0C8", "#F8C0C8", "#F8C0C8", "#F8C0C8", "#F8C0C8", "#F8C0C8", "#F8C0C8", "#F8C0C8", "#F8C0C8"]},
    {data: [28, 48, 40, 19, 86, 27, 90, 23, 32], label: 'Shared Room', backgroundColor:["#DBBADD", "#DBBADD", "#DBBADD", "#DBBADD", "#DBBADD", "#DBBADD", "#DBBADD", "#DBBADD", "#DBBADD"]}
  ];

  //ne bar chart
  public neBarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public neBarChartLabels:string[] = ['Hollywood', 'Lloyd', 'Irvington', 'Roseway', 'Humboldt', 'Eliot', 'Rose City Park', 'Cully', 'Woodlawn'];
  public neBarChartType:string = 'bar';

  public neBarChartColors: Array<any> = [{}];
  public neBarChartLegend:boolean = true;

  public neBarChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40, 23, 32], label: 'Entire Room/Apt', backgroundColor:["#44E5E7", "#44E5E7", "#44E5E7", "#44E5E7", "#44E5E7", "#44E5E7", "#44E5E7", "#44E5E7", "#44E5E7"]},
    {data: [28, 48, 40, 19, 86, 27, 90, 23, 32], label: 'Private Room', backgroundColor:["#59D2FE", "#59D2FE", "#59D2FE", "#59D2FE", "#59D2FE", "#59D2FE", "#59D2FE", "#59D2FE", "#59D2FE"]},
    {data: [28, 48, 40, 19, 86, 27, 90, 23, 32], label: 'Shared Room', backgroundColor:["#A1FCDF", "#A1FCDF", "#A1FCDF", "#A1FCDF", "#A1FCDF", "#A1FCDF", "#A1FCDF", "#A1FCDF", "#A1FCDF"]}
  ];

  //nportland bar chart
  public nBarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public nBarChartLabels:string[] = ['Hollywood', 'Lloyd', 'Irvington', 'Roseway', 'Humboldt', 'Eliot', 'Rose City Park', 'Cully', 'Woodlawn'];
  public nBarChartType:string = 'bar';

  public nBarChartColors: Array<any> = [{}];
  public nBarChartLegend:boolean = true;

  public nBarChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40, 23, 32], label: 'Entire Room/Apt', backgroundColor:["#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F", "#476A6F"]},
    {data: [28, 48, 40, 19, 86, 27, 90, 23, 32], label: 'Private Room', backgroundColor:["#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A", "#519E8A"]},
    {data: [28, 48, 40, 19, 86, 27, 90, 23, 32], label: 'Shared Room', backgroundColor:["#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B", "#7EB09B"]}
  ];

  //sw portland bar chart
  public swBarChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public swBarChartLabels:string[] = ['Hollywood', 'Lloyd', 'Irvington', 'Roseway', 'Humboldt', 'Eliot', 'Rose City Park', 'Cully', 'Woodlawn'];
  public swBarChartType:string = 'bar';

  public swBarChartColors: Array<any> = [{}];
  public swBarChartLegend:boolean = true;

  public swBarChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40, 23, 32], label: 'Entire Room/Apt', backgroundColor:["#283044", "#283044", "#283044", "#283044", "#283044", "#283044", "#283044", "#283044", "#283044"]},
    {data: [28, 48, 40, 19, 86, 27, 90, 23, 32], label: 'Private Room', backgroundColor:["#A9BCD0", "#A9BCD0", "#A9BCD0", "#A9BCD0", "#A9BCD0", "#A9BCD0", "#A9BCD0", "#A9BCD0", "#A9BCD0"]},
    {data: [28, 48, 40, 19, 86, 27, 90, 23, 32], label: 'Shared Room', backgroundColor:["#78A1BB", "#78A1BB", "#78A1BB", "#78A1BB", "#78A1BB", "#78A1BB", "#78A1BB", "#78A1BB", "#78A1BB"]}
  ];
}
