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

  // events
  public chartClicked(e:any):void { }

  public chartHovered(e:any):void { }
}
