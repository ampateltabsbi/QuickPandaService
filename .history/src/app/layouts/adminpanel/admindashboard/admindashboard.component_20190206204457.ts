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
  public approvedCompany = 0;
  public rejectedCompany = 0;
  public pendingCompany = 0;

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
        this.approvedCompany = data.length;
      });
  }

  getPendingCompany() {
    this.apiService
      .getModelListbyActive('Company', 'GetActiveCompany')
      .subscribe((data: Company[]) => {
        this.pendingCompany = data.length;
      });
  }

  getRejectedCompany() {
    this.apiService
      .getModelListbyActive('Company', 'GetRejectedCompany')
      .subscribe((data: Company[]) => {
        this.rejectedCompany = data.length;
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
    }, 1);
  }

}
