import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Area } from '../model/Area';
import { CityMaster } from '../model/citymaster';
import { StateMaster } from '../model/statemaster';
import { CountryMaster } from '../model/countrymaster';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  area: Area[] = [];
  citymaster: CityMaster[] = [];
  statemaster: StateMaster[] = [];
  countryMaster: CountryMaster[] = [];
  tempFilter = [];
  submitType = 'Save';
  selectedRow: number;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public searchString: string;

  constructor(private apiService: APIService, private router: Router, private notificationService: NotificationService) {
    this.apiService.selectedModel = this.area;
    this.bindAllArea();
    this.bindActiveCountryMaster();
  }

  ngOnInit() {
    this.resetForm();
  }

  showSuccess() {
    if (this.submitType === 'Save') {
      this.notificationService.notify('Success', 'Record saved successfully.', 'success');
    } else {
      this.notificationService.notify('Success', 'Record updated successfully.', 'success');
    }
  }

  onSubmit(areaForm: NgForm) {
    if (areaForm.value.ID === 0) {
      this.apiService
        .addService(areaForm.value, 'Areas')
        .subscribe(
          result => {
            this.bindAllArea();
            this.showSuccess();
            this.resetForm();
          },
          err => {
            console.log(err);
          }
        );
    } else {
      this.apiService
        .updateService(
          areaForm.value,
          areaForm.value.ID,
          'Areas'
        )
        .subscribe(
          result => {
            this.bindAllArea();
            this.showSuccess();
            this.resetForm();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  resetForm(areaForm?: NgForm) {
    this.apiService.selectedModel = {
      AreaName: '',
      ID: 0,
      CityID: null,
      IsActive: false,
      CityName: '',
      StateID: null,
      CountryID: null
    };
    this.submitType = 'Save';
  }

  editArea(areaId: number): void {
    this.selectedRow = areaId;
    this.apiService.selectedModel = new Area();
    const tempArea = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    this.apiService.selectedModel = Object.assign({}, tempArea[0]);
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.AreaName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllArea() {
    this.apiService
      .getService('Areas')
      .subscribe((data: CityMaster[]) => {
        this.tempFilter = [...data];
        this.data = data;
      });
  }

  bindActiveCityMaster(stateID: number) {
    this.apiService.selectedModel.CityID = null;
    if (stateID === null) {
      this.citymaster = null;
    } else {
      this.apiService
      .getModelListById('Citymasters', stateID, 'GetCityByStateID')
      .subscribe((citymasterdata: CityMaster[]) => {
        const filterData = citymasterdata;
        this.citymaster = filterData;
      });
    }
  }

  bindActiveStateMaster(countryID: number) {
    this.apiService.selectedModel.stateID = null;
    if (countryID === null) {
      this.statemaster = null;
    } else {
      this.apiService
      .getModelListById('StateMasters', countryID, 'GetStateByCountryID')
      .subscribe((statemasterdata: StateMaster[]) => {
        const filterData = statemasterdata;
        this.statemaster = filterData;
      });
    }
  }

  bindActiveCountryMaster() {
    this.apiService
      .getModelListbyActive('CountryMasters', 'GetActiveCountry')
      .subscribe((data: CountryMaster[]) => {
        this.countryMaster = data;
      });
  }

}
