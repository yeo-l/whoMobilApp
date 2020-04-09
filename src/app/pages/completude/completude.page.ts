import { Component, OnInit } from '@angular/core';
import {Color, Label} from "ng2-charts";
import ChartDataSets = Chart.ChartDataSets;
import ChartType = Chart.ChartType;
import ChartOptions = Chart.ChartOptions;

@Component({
  selector: 'app-completude',
  templateUrl: './completude.page.html',
  styleUrls: ['./completude.page.scss'],
})
export class CompletudePage implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 780, 75, 77, 75], label: 'Crude oil prices' },
    { data: [120, 455, 100, 340,60,20], label: 'Account B' },
    { data: [45, 67, 800, 500,3,80], label: 'Account C' }
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'blue',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';



  //bar char
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 600, 70, 46, 33,2], label: 'Best Fruits' },
    { data: [120, 455, 100, 340,44,23], label: 'Account B' },
    { data: [45, 67, 800, 500,600,45], label: 'Account C' }
  ];
  barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'blue',
      pointBackgroundColor: 'rgb(103, 58, 183)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(103, 58, 183, .8)'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onChartClick(event) {
    console.log(event);
  }
}
