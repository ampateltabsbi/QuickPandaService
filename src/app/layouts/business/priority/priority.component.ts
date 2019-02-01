import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Priority } from '../model/priority';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss']
})
export class PriorityComponent implements OnInit {
  priority: Priority[] = [];
  submitType = 'Save';
  selectedRow: number;
  tempFilter = [];

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  SelectedCompanyID: number;

  constructor(public apiService: APIService, private router: Router, private notificationService: NotificationService) {
    this.SelectedCompanyID = Number(localStorage.getItem('SelectedCompanyID'));
    this.apiService.setBaseUrl(true);
    this.apiService.selectedModel = this.priority;
    this.bindAllPriority();
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

  onSubmit(priorityForm: NgForm) {
    priorityForm.value.CompanyID = this.SelectedCompanyID;
    if (priorityForm.value.ID === 0) {
      this.apiService.addService(priorityForm.value, 'Priority').subscribe(
        result => {
          this.bindAllPriority();
          this.showSuccess();
          this.resetForm();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService
        .updateService(priorityForm.value, priorityForm.value.ID, 'Priority')
        .subscribe(
          result => {
            this.bindAllPriority();
            this.showSuccess();
            this.resetForm();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  resetForm(priorityForm?: NgForm) {
    this.apiService.selectedModel = {
      Name: '',
      ID: 0,
      DaysToCompleteTask: 0,
      HoursToCompleteTask: 0,
      MinutesToCompleteTask: 0,
      IncludeSaturdaysInPriorityCalculation: false,
      IncludeSundaysInPriorityCalculation: false,
      IsActive: false,
      CompanyID: 0
    };
    this.submitType = 'Save';
  }

  editPriority(priorityId: number): void {
    this.selectedRow = priorityId;
    this.apiService.selectedModel = new Priority();
    const tempPriority = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    this.apiService.selectedModel = Object.assign({}, tempPriority[0]);
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllPriority() {
    this.apiService.getModelListById('Priorities', this.SelectedCompanyID, 'GetPriorityByCompanyId').subscribe((data: Priority[]) => {
      this.tempFilter = [...data];
      this.data = data;
    });
  }
}
