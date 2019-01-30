import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Company } from '../model/Company';

@Component({
  selector: 'app-companyapproved',
  templateUrl: './companyapproved.component.html',
  styleUrls: ['./companyapproved.component.scss']
})
export class CompanyapprovedComponent implements OnInit {
  company: Company[] = [];
  tempFilter = [];
  selectedRow: number;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public searchString: string;

  constructor(private apiService: APIService, private router: Router) {
    this.apiService.selectedModel = this.company;
    this.bindApprovedCompany();
  }

  ngOnInit() {
  }

  bindApprovedCompany() {
    this.apiService
      .getModelListbyActive('Company', 'GetApprovedCompany')
      .subscribe((data: Company[]) => {
        this.tempFilter = [...data];
        this.data = data;
      });
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.CompanyName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }
  isRejectCompany(companyId: number, reason: string): void {
    this.selectedRow = companyId;
    this.apiService.selectedModel = new Company();
    const tempCompany = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    tempCompany[0].Approved = false;
    tempCompany[0].Rejected = true;
    tempCompany[0].RejectedReason = reason;
    this.apiService
      .updateService(tempCompany[0], tempCompany[0].ID, 'Company')
      .subscribe(
        result => {
          this.bindApprovedCompany();
        },
        err => {
          console.log(err);
        }
      );
  }
}
