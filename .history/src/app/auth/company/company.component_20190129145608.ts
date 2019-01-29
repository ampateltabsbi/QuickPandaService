
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
   this.apiService.selectedModel.RegistrationNumber = ownerId;
   this.RegistrationNo = ownerId;
   this.bindActiveCountryMaster();
   }

  onSubmit(ownerForm: NgForm) {
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(ownerForm?: NgForm) {
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

  onSelectCountry(countryid) {
    debugger;
    this.apiService.selectedModel.CountryID = countryid;
    this.apiService.selectedModel.StateID = 0;
    this.citymaster = [];
    this.bindActiveStateMaster(countryid);
  }

  onSelectState(stateid) {
    debugger;
    this.apiService.selectedModel.StateID = stateid;
    this.citymaster = this.bindActiveCityMaster().filter((item) => {
      return item.StateID === Number(stateid);
    });
  }

  bindActiveCountryMaster() {
    this.apiService
      .getModelListbyActive('CountryMasters', 'GetActiveCountry')
      .subscribe((data: CountryMaster[]) => {
        this.countrymaster = data;
      });
  }

  bindActiveStateMaster(countryid) {
    this.apiService
      .getModelListbyActive('StateMasters', 'GetActiveState')
      .subscribe((data: StateMaster[]) => {

        let epic: Epic = epics.filter(epic => epic.id === id)[0];
        callback(epic);

      //   const stateData = data.filter(x => x.CountryID === countryid);
      // this.statemaster = stateData;
      });
    }

  // bindActiveStateMaster() {
  //   return this.apiService
  //   .getModelListbyActive('StateMasters', 'GetActiveState')
  //   .subscribe((data) => {
  //     return data;
  //   });
  // }

  bindActiveCityMaster() {
    return this.apiService
    .getModelListbyActive('Citymasters', 'GetActiveCity')
    .subscribe((data) => {
      return data;
    });
  }
}
