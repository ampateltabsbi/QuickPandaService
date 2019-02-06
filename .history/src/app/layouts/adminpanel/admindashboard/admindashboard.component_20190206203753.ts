import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { APIService } from '../../../shared/services/api.service';
import { Company } from '../model/company';
declare var $: any;

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: [
    './admindashboard.component.scss',
    '../../../../assets/icon/SVG-animated/svg-weather.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdmindashboardComponent implements OnInit {
  company: Company[] = [];

  public data: any;
  public rowsOnPage = 0;

  constructor(public apiService: APIService) {
    this.apiService.selectedModel = this.company;
    this.getApprovedCompany();
    this.getPendingCompany();
    this.getRejectedCompany();
  }

  getApprovedCompany() {
    this.apiService
      .getModelListbyActive('Company', 'GetApprovedCompany')
      .subscribe((data: Company[]) => {
        this.data = data;
      });
  }

  getPendingCompany() {
    this.apiService
      .getModelListbyActive('Company', 'GetActiveCompany')
      .subscribe((data: Company[]) => {
        this.data = data;
      });
  }

  getRejectedCompany() {
    this.apiService
      .getModelListbyActive('Company', 'GetRejectedCompany')
      .subscribe((data: Company[]) => {
        this.data = data;
      });
  }

  ngOnInit() {
    setTimeout( () => {
      /* visitors pie chart*/
      $('.visitor-chart').sparkline([1, 2], {
        type: 'pie',
        width: '100px',
        height: '65px',
        sliceColors: ['#ccc', '#0073aa'],
        tooltipClassname: 'chart-sparkline'
      });
      /*custom line chart*/
      $('.customchart').sparkline([15, 30, 27, 35, 50, 71, 60], {
        type: 'line',
        width: 300,
        height: 300,
        tooltipClassname: 'chart-sparkline',
        chartRangeMax: '50',
        lineColor: '#0073aa',
        fillColor: 'rgba(0, 115, 170, 0.5)'
      });

      $('.customchart').sparkline([0, 25, 10, 7, 25, 35, 30], {
        type: 'line',
        width: 300,
        height: 300,
        composite: '!0',
        tooltipClassname: 'chart-sparkline',
        chartRangeMax: '40',
        lineColor: '#239a55',
        fillColor: 'rgba(35, 154, 85, .5)'
      });
    }, 1);
  }

}
