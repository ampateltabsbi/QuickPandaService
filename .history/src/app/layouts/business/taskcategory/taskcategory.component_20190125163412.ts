// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-taskcategory',
//   templateUrl: './taskcategory.component.html',
//   styleUrls: ['./taskcategory.component.scss']
// })
// export class TaskcategoryComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Taskcategory } from '../model/taskcategory';
import { Company } from '../model/company';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-taskcategory',
  templateUrl: './taskcategory.component.html',
  styleUrls: ['./taskcategory.component.scss']
})
export class TaskcategoryComponent implements OnInit {
  taskcategory: Taskcategory[] = [];
  company: Company[] = [];
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
    this.apiService.selectedModel = this.taskcategory;
    this.bindAllTaskcategory();
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

  onSubmit(taskcategoryForm: NgForm) {
    if (taskcategoryForm.value.ID === 0) {
      this.apiService.addService(taskcategoryForm.value, 'Taskcategory').subscribe(
        result => {
          this.bindAllTaskcategory();
          this.showSuccess();
          this.resetForm();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService
        .updateService(taskcategoryForm.value, taskcategoryForm.value.ID, 'Taskcategory')
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

  resetForm(taskcategoryForm?: NgForm) {
    this.apiService.selectedModel = {
      Name: '',
      ID: 0,
      CompanyID: 0,
      IsActive: false
    };
    this.submitType = 'Save';
  }

  editTaskcategory(taskcategoryId: number): void {
    this.selectedRow = taskcategoryId;
    this.apiService.selectedModel = new Taskcategory();
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
      return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllTaskcategory() {
    this.apiService.getService('GetTaskcategory').subscribe((data: Taskcategory[]) => {
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
