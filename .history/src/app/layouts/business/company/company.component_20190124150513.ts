import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Company } from '../model/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  company: Company[] = [];
  submitType = 'Save';
  selectedRow: number;
  tempFilter = [];

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(private apiService: APIService, private router: Router) {
    this.apiService.selectedModel = this.company;
    this.bindAllCompany();
  }

  ngOnInit() {
     this.resetForm();
  }

  showSuccess() {}

  onSubmit(companyForm: NgForm) {
    if (companyForm.value.ID === 0) {
      this.apiService.addService(companyForm.value, 'Company').subscribe(
        result => {
          this.resetForm();
          this.bindAllCompany();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService
        .updateService(companyForm.value, companyForm.value.ID, 'Company')
        .subscribe(
          result => {
            this.resetForm();
            this.bindAllCompany();
            this.showSuccess();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  resetForm(companyForm?: NgForm) {
    this.apiService.selectedModel = {
      Name: '',
      ID: 0,
      DaysToCompleteTask: 0,
      HoursToCompleteTask: 0,
      MinutesToCompleteTask: 0,
      IncludeSaturdaysInCompanyCalculation: false,
      IncludeSundaysInCompanyCalculation: false,
      IsActive: false
    };
    this.submitType = 'Save';
  }

  editCompany(companyId: number): void {
    this.selectedRow = companyId;
    this.apiService.selectedModel = new Company();
    const tempCompany = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    this.apiService.selectedModel = Object.assign({}, tempCompany[0]);
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.CompanyName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllCompany() {
    this.apiService.getService('GetCompany').subscribe((data: Company[]) => {
      this.tempFilter = [...data];
      this.data = data;
    });
  }
}
