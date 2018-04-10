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

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Lents', 'Sellwood', 'Mount Tabor', 'Montavilla', 'Powellhurst', 'Foster-Powell', 'Buckman'];
  public barChartType:string = 'bar';
  public barChartColors: Array<any> = [{}];
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Entire Room/Apt', backgroundColor:["#B8E0D2", "#95B8D1", "#809BCE", "#EAEBED", "#D56AA0", "#B8E0D2", "#95B8D1"]},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Private Room', backgroundColor:["#B8E0D2", "#95B8D1", "#809BCE", "#EAEBED", "#D56AA0", "#B8E0D2", "#95B8D1"]},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Shared Room', backgroundColor:["#B8E0D2", "#95B8D1", "#809BCE", "#EAEBED", "#D56AA0", "#B8E0D2", "#95B8D1"]}
  ];
}
