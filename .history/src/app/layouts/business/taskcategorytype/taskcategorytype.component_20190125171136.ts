import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TaskCategoryType } from '../model/Taskcategorytype';
import { TaskCategory } from '../model/taskcategory';
import { Company } from '../model/company';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-taskcategorytype',
  templateUrl: './taskcategorytype.component.html',
  styleUrls: ['./taskcategorytype.component.scss']
})
export class TaskcategorytypeComponent implements OnInit {
  taskcategory: TaskCategory[] = [];
  company: Company[] = [];
  taskcategorytype: TaskCategoryType[] = [];
  tempFilter = [];
  submitType = 'Save';
  selectedRow: number;
  public searchString: string;
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(private apiService: APIService, private router: Router, private notificationService: NotificationService) {
    this.apiService.setBaseUrl(true);
    this.apiService.selectedModel = this.taskcategorytype;
    this.bindAllTaskCategoryType();
    this.bindActiveCompany();
    this.bindActiveCompanyCategory();
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

  onSubmit(taskcategorytypeForm: NgForm) {
    if (taskcategorytypeForm.value.ID === 0) {
      this.apiService.addService(taskcategorytypeForm.value, 'TaskCategoryType').subscribe(
        result => {
          this.bindAllTaskCategoryType();
          this.showSuccess();
          this.resetForm();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService
        .updateService(taskcategorytypeForm.value, taskcategorytypeForm.value.ID, 'TaskCategory')
        .subscribe(
          result => {
            this.bindAllTaskcategory();
            this.showSuccess();
            this.resetForm();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  resetForm(taskcategorytypeForm?: NgForm) {
    this.apiService.selectedModel = {
      CategoryName: '',
      ID: 0,
      CompanyID: 0,
      IsActive: false
    };
    this.submitType = 'Save';
  }

  editTaskCategory(taskcategoryId: number): void {
    this.selectedRow = taskcategoryId;
    this.apiService.selectedModel = new TaskCategory();
    const tempTaskcategory = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    this.apiService.selectedModel = Object.assign({}, tempTaskcategory[0]);
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.CategoryName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllTaskCategoryType() {
    this.apiService.getService('GetTaskCategory').subscribe((data: TaskCategory[]) => {
      this.tempFilter = [...data];
      this.data = data;
    });
  }

  bindActiveCompany() {
    this.apiService.getModelListbyActive('Companies', 'GetActiveCompany').subscribe((data: Company[]) => {
      const filterData = data;
      this.company = filterData;
    });
  }
}