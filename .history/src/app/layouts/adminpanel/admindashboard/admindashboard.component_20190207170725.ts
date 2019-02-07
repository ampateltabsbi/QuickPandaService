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
  public pendingCompany = '0';
  public approvedCompany = '0';
  public rejectedCompany = '0';

  public pending = '';

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
        this.approvedCompany = data.length.toString();
        $('.Approved-chart').sparkline([100, this.approvedCompany], {
          type: 'pie',
          width: '100px',
          height: '65px',
          sliceColors: ['#ccc', '#2ECC71'],
          tooltipClassname: 'chart-sparkline'
        });
      });
  }

  getPendingCompany() {
    this.apiService
      .getModelListbyActive('Company', 'GetActiveCompany')
      .subscribe((data: Company[]) => {
        this.pendingCompany = data.length.toString();
        $('.Pending-chart').sparkline([100, this.pendingCompany], {
          type: 'pie',
          width: '100px',
          height: '65px',
          sliceColors: ['#ccc', '#0073aa'],
          tooltipClassname: 'chart-sparkline'
        });
      });
  }

  getRejectedCompany() {
    this.apiService
      .getModelListbyActive('Company', 'GetRejectedCompany')
      .subscribe((data: Company[]) => {
        this.rejectedCompany = data.length.toString();
        $('.Rejected-chart').sparkline([100, this.rejectedCompany], {
          type: 'pie',
          width: '100px',
          height: '65px',
          sliceColors: ['#ccc', '#E74C3C'],
          tooltipClassname: 'chart-sparkline'
        });
      });
  }

  ngOnInit() {
    setTimeout( () => {
      /* Pending pie chart*/
      
      /* Approved pie chart*/
      
      debugger;
      /* Rejected pie chart*/
     
    }, 1);
  }

}
