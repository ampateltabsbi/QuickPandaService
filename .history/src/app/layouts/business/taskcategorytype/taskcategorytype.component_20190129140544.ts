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
        .updateService(taskcategorytypeForm.value, taskcategorytypeForm.value.ID, 'TaskCategoryType')
        .subscribe(
          result => {
            this.bindAllTaskCategoryType();
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
      CategoryTypeName: '',
      ID: 0,
      CompanyID: 0,
      CategoryID: 0,
      IsActive: false
    };
    this.submitType = 'Save';
  }

  editTaskCategoryType(taskcategorytypeId: number): void {
    this.selectedRow = taskcategorytypeId;
    this.apiService.selectedModel = new TaskCategoryType();
    const tempTaskcategorytype = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    this.apiService.selectedModel = Object.assign({}, tempTaskcategorytype[0]);
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.CategoryTypeName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllTaskCategoryType() {
    this.apiService.getService('GetTaskCategoryType').subscribe((data: TaskCategoryType[]) => {
      this.tempFilter = [...data];
      this.data = data;
    });
  }

  bindActiveCompany() {
    this.apiService.getModelListbyActive('Companies', 'GetActiveBusinessCompany').subscribe((data: Company[]) => {
      const filterData = data;
      this.company = filterData;
    });
  }

  bindActiveCompanyCategory() {
    this.apiService.getModelListbyActive('TaskCategory', 'GetActiveTaskCategory').subscribe((data: TaskCategory[]) => {
      const filterData = data;
      this.taskcategory = filterData;
    });
  }
}
