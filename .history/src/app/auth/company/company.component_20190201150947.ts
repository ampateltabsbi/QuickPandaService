import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
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
  countrymaster: CountryMaster[] = [];
  statemaster: StateMaster[] = [];
  citymaster: CityMaster[] = [];

  CurrentFile: File;

  constructor(
    private apiService: APIService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.bindActiveCountryMaster();
  }

  public FileChangeEvent(fileInput: any) {
    this.CurrentFile = fileInput.target.files[0];

    let reader = new FileReader();
    reader.onload = () => {
      this.apiService.selectedModel.CompanyLogo = reader.result;
    };
    reader.readAsDataURL(this.CurrentFile);
  }

  onSubmit(companyForm: NgForm) {
    this.apiService.addService(companyForm.value, 'Company').subscribe(
      result => {
        this.showSuccess();
        this.resetForm();
        this.router.navigateByUrl('/auth/verification');
        localStorage.setItem('verificicationtype', 'Verify Your Email!');
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.resetForm();

    const ownerId = localStorage.getItem('OwnerId');
    this.apiService.selectedModel = this.company;
    this.apiService.selectedModel.CreatedBy = 'ownerId';
    this.apiService.selectedModel.CreatedDate = new Date();
    this.apiService.selectedModel.OwnerEmail = localStorage.getItem('ownerEmail');
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
      RejectedReason: ''
    };
    this.submitType = 'Save';
  }

  showSuccess() {
    if (this.submitType === 'Save') {
      this.notificationService.notify(
        'Success',
        'Record saved successfully.',
        'success'
      );
    } else {
      this.notificationService.notify(
        'Success',
        'Record updated successfully.',
        'success'
      );
    }
  }

  bindStateByCountryId(countryId: number) {
    this.apiService.selectedModel.CountryID = null;
    this.apiService.selectedModel.StateID = null;
    if (countryId === null) {
      this.statemaster = null;
    } else {
      this.apiService
        .getModelListById('StateMasters', countryId, 'GetStateByCountryId')
        .subscribe((statemaster: StateMaster[]) => {
          const filterData = statemaster;
          this.statemaster = filterData;
        });
    }
  }

  bindCityByStateId(stateId: number) {
    this.apiService.selectedModel.CategoryTypeID = null;
    if (stateId === null) {
      this.citymaster = null;
    } else {
      this.apiService
        .getModelListById('Citymasters', stateId, 'GetCityByStateId')
        .subscribe((cityMaster: CityMaster[]) => {
          const filterData = cityMaster;
          this.citymaster = filterData;
        });
    }
  }

  bindActiveCountryMaster() {
    this.apiService
      .getModelListbyActive('CountryMasters', 'GetActiveCountry')
      .subscribe((data: CountryMaster[]) => {
        this.countrymaster = data;
      });
  }

  btnClick = function() {
    this.router.navigateByUrl('/auth/owner-register');
  };
}
