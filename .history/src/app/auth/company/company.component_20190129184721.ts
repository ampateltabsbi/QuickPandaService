
import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../shared/services/api.service';
import { NotificationService } from '../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Company } from '../model/company';
import { CountryMaster } from './../../layouts/adminpanel/model/countrymaster';
import { StateMaster } from './../../layouts/adminpanel/model/statemaster';
import { CityMaster } from './../../layouts/adminpanel/model/citymaster';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  company: Company[] = [];
  submitType = 'Save';
  RegistrationNo: string;
  countrymaster: CountryMaster[] = [];
  statemaster: StateMaster[] = [];
  citymaster: CityMaster[] = [];

  constructor(
    private apiService: APIService,
    private router: Router,
    private notificationService: NotificationService
  ) {
   const ownerId = localStorage.getItem('OwnerId');
   this.apiService.selectedModel = this.company;
   this.apiService.selectedModel.CreatedBy = ownerId;
   this.RegistrationNo = ownerId;
   this.bindActiveCountryMaster();
   this.bindActiveStateMaster();
   this.bindActiveCityMaster();
   }

   onSubmit(companyForm: NgForm) {
     debugger;
    //  this.apiService.addService(companyForm.value, 'Company').subscribe(
    //   result => {
    //     debugger;
    //     localStorage.setItem('OwnerId', result.ID);
    //     this.showSuccess();
    //     this.resetForm();
    //     this.router.navigateByUrl('/auth/company-register');
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );

    this.router.navigateByUrl('/auth/verification');
    localStorage.setItem('verificicationtype', 'Verify Your Email!');
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(companyForm?: NgForm) {
    this.apiService.selectedModel = {
      ID: 0,
  CompanyName: '',
  IsActive: false,
  Email: '',
  Phone: '',
  Address1: '',
  Address2: '',
  CityID: 0,
  StateID: 0,
  CountryID: 0,
  PostCode: '',
  WebAddress: '',
  CompanyLogo: [],
  HourlyRate: Float64Array,
  VAT: '',
  Registration0: '',
  CreatedBy: 0,
  CreatedDate: Date,
  UpdatedBy: 0,
  UpdatedDate: Date,
  UserID: 0,
  ConnectionString: '',
  DatabaseName: '',
  Approved: false,
  Rejected: false,
  RejectedReason: '',
    };
    this.submitType = 'Save';
  }

  showSuccess() {
    if (this.submitType === 'Save') {
      this.notificationService.notify('Success', 'Record saved successfully.', 'success');
    } else {
      this.notificationService.notify('Success', 'Record updated successfully.', 'success');
    }
  }

  onSelectCountry(country_id: number) {
    debugger;
    this.apiService.selectedModel.CountryID = country_id;
    this.apiService.selectedModel.StateID = 0;
    this.citymaster = [];

  }

  onSelectState(state_id: number) {
    debugger;
    this.apiService.selectedModel.StateID = state_id;
    this.bindActiveCityMaster();
  }

  bindActiveCountryMaster() {
    this.apiService
      .getModelListbyActive('CountryMasters', 'GetActiveCountry')
      .subscribe((data: CountryMaster[]) => {
        this.countrymaster = data;
      });
  }

  bindActiveStateMaster() {
    this.apiService
      .getModelListbyActive('StateMasters', 'GetActiveState')
      .subscribe((data: StateMaster[]) => {
        this.statemaster = data;
      });
  }
 bindActiveCityMaster() {
  this.apiService
    .getModelListbyActive('Citymasters', 'GetActiveCity')
    .subscribe((data: CityMaster[]) => {
      this.citymaster = data;
    });
}
}
