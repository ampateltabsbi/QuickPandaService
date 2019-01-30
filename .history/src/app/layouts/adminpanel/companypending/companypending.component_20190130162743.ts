import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Company } from '../model/Company';

@Component({
  selector: 'app-companypending',
  templateUrl: './companypending.component.html',
  styleUrls: ['./companypending.component.scss']
})
export class CompanypendingComponent implements OnInit {
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
    this.bindPendingCompany();
    //localStorage.setItem('abc','');
  }

  ngOnInit() {}

  bindPendingCompany() {
    this.apiService
      .getModelListbyActive('Company', 'GetActiveCompany')
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
  isApprovCompany(companyId: number): void {
    this.selectedRow = companyId;
    this.apiService.selectedModel = new Company();
    const tempCompany = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    tempCompany[0].Approved = true;
    this.apiService
      .updateService(tempCompany[0], tempCompany[0].ID, 'Company')
      .subscribe(
        result => {
          this.bindPendingCompany();
        },
        err => {
          console.log(err);
        }
      );
  }

  isRejectCompany(companyId: number, reason: string): void {
    this.selectedRow = companyId;
    this.apiService.selectedModel = new Company();
    const tempCompany = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    tempCompany[0].Rejected = true;
    tempCompany[0].rejectedreason
    this.apiService
      .updateService(tempCompany[0], tempCompany[0].ID, 'Company')
      .subscribe(
        result => {
          this.bindPendingCompany();
        },
        err => {
          console.log(err);
        }
      );
  }
}
