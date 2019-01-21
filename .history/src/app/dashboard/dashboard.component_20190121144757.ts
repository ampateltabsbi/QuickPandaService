import {Component, OnInit, ViewEncapsulation} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss',
    '../../assets/icon/SVG-animated/svg-weather.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  comboChartData =  {
    chartType: 'ComboChart',
    dataTable: [
      ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
      ['2004/05', 165, 938, 522, 998, 450, 614.6],
      ['2005/06', 135, 1120, 599, 1268, 288, 782],
      ['2006/07', 157, 1167, 587, 807, 397, 323],
      ['2007/08', 139, 1110, 615, 968, 215, 509.4],
      ['2008/09', 136, 691, 629, 1026, 366, 269.6]
    ],
    options: {
      height: 320,
      title: 'Monthly Coffee Production by Country',
      vAxis: { title: 'Cups' },
      hAxis: { title: 'Month' },
      seriesType: 'bars',
      bar: {groupWidth: '90%'},
      series: { 5: { type: 'line' } },
      colors: ['#e74c3c', '#2ecc71', '#5faee3', '#0073aa', '#f1c40f', '#e74c3c']
    },
  };
  /*Polar chart*/
  type3 = 'polarArea';
  data3 = {
    datasets: [{
      data: [
        11,
        16,
        7,
        14
      ],
      backgroundColor: [
        '#7E81CB',
        '#1ABC9C',
        '#B8EDF0',
        '#01C0C8'
      ],
      hoverBackgroundColor: [
        '#a1a4ec',
        '#2adab7',
        '#a7e7ea',
        '#10e6ef'
      ],
      label: 'My dataset' // for legend
    }],
    legend: {
      display: false,
    },
    labels: [
      'Blue',
      'Green',
      'Light Blue',
      'Sea Green'
    ]
  };
  options3 = {
    elements: {
      arc: {
        borderColor: ''
      },
      labels: {
        display: false,
      }
    }
  };
  constructor() {}

  ngOnInit() {
    
  }

}
