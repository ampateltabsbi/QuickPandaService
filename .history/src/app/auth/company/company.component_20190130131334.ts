
import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../shared/services/api.service';
import { NotificationService } from '../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
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
  myFiles: string [] = [];



  constructor(
    private apiService: APIService,
    private router: Router,
    private notificationService: NotificationService
  ) {
   const ownerId = localStorage.getItem('OwnerId');
   this.apiService.selectedModel = this.company;
   this.apiService.selectedModel.CreatedBy = ownerId;
   this.apiService.selectedModel.CreatedDate = new Date();
   this.RegistrationNo = ownerId;
   this.bindActiveCountryMaster();
   this.bindActiveStateMaster();
   this.bindActiveCityMaster();
   }

   getFileDetails (e) {
    for (let i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }
   onSubmit(companyForm: NgForm) {
     debugger;
     const frmData = new FormData();

     for (let i = 0; i < this.myFiles.length; i++) {
      //companyForm.value.push('CompanyLogo', this.myFiles[i]);

      companyForm.controls['power'].setValue('anthing here');

    }

     this.apiService.addService(companyForm.value, 'Company').subscribe(
      result => {
        debugger;
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
debugger;


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

  bindStateByCountryId(countryId: number) {
    this.apiService.selectedModel.CountryID = null;
    this.apiService.selectedModel.StateID = null;
    if (countryId === null) {
      this.statemaster = null;
    } else {
      this.apiService
        .getModelListById(
          'StateMasters',
          'GetStateByCountryId',
          countryId
        )
        .subscribe((statemaster: StateMaster[]) => {
          const filterData = statemaster;
          this.statemaster = filterData;
        });
    }
  }

  bindActiveCompanyCategoryType(stateId: number) {
    this.apiService.selectedModel.CategoryTypeID = null;
    if (stateId === null) {
      this.taskcategorytype = null;
    } else {
      this.apiService
        .getModelListById(
          'Citymasters',
          'GetCityByStateId',
          stateId
        )
        .subscribe((city: TaskCategoryType[]) => {
          const filterData = categorytypedata;
          this.taskcategorytype = filterData;
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

}
