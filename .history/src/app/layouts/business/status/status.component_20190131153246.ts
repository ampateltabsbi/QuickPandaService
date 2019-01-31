import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Status } from '../model/status';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  status: Status[] = [];
  tempFilter = [];
  submitType = 'Save';
  selectedRow: number;
  public searchString: string;
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  SelectedCompanyID: number;

  constructor(private apiService: APIService, private router: Router, private notificationService: NotificationService) {
    this.SelectedCompanyID = Number(localStorage.getItem('SelectedCompanyID'));
    this.apiService.setBaseUrl(true);
    this.apiService.selectedModel = this.status;
    this.bindAllStatus();
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

  onSubmit(statusForm: NgForm) {
    statusForm.value.CompanyID = this.SelectedCompanyID;
    if (statusForm.value.ID === 0) {
      this.apiService.addService(statusForm.value, 'Status').subscribe(
        result => {
          this.bindAllStatus();
          this.showSuccess();
          this.resetForm();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService
        .updateService(statusForm.value, statusForm.value.ID, 'Status')
        .subscribe(
          result => {
            this.bindAllStatus();
            this.showSuccess();
            this.resetForm();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  resetForm(statusForm?: NgForm) {
    this.apiService.selectedModel = {
      Name: '',
      ID: 0,
      CompanyID: 0,
      IsActive: false
    };
    this.submitType = 'Save';
  }

  editStatus(statusId: number): void {
    this.selectedRow = statusId;
    this.apiService.selectedModel = new Status();
    const tempStatus = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    this.apiService.selectedModel = Object.assign({}, tempStatus[0]);
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllStatus() {
    this.apiService.getModelListById('Status', this.SelectedCompanyID, 'GetPriorityByCompanyId').subscribe((data: Status[]) => {
      this.tempFilter = [...data];
      this.data = data;
    });
  }
}
