import { Component, OnInit, ViewChild  } from '@angular/core';
declare var $: any;
declare var Morris: any;
import 'd3';
import * as c3 from 'c3';
import { APIService } from '../../../shared/services/api.service';
import {NotificationsService} from 'angular2-notifications';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Category } from '../model/category';
import { DatatableComponent } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  rowsBasic = [];
  fullScreenRow = [];
  loadingIndicator = true;
  reorderable = true;

  rows = [];
  expanded = {};
  timeout: any;

  rowsFilter = [];
  tempFilter = [];

  @ViewChild(DatatableComponent) public table: DatatableComponent;

  rowsClient = [];
  category: Category[] = [];
  submitType = 'Save';
  selectedRow: number;

  public searchString: string;

  constructor(private apiService: APIService, private router: Router, public notifications: NotificationsService) {
     this.apiService.selectedModel = this.category;
    //this.bindAllCategory();
    this.fetchFilterData((data) => {
      // cache our list
      this.tempFilter = [...data];

      // push our inital complete list
      this.rowsFilter = data;
    });
   }

   ngOnInit() {
    this.resetForm();
  }

  showSuccess() {
    this.notifications.success('Record Saved Successfully.', 'Success!');
  }

  onSubmit(categoryForm: NgForm) {
    if (categoryForm.value.ID === 0) {
      this.apiService.addService(categoryForm.value, 'Categories').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategory();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService.updateService(categoryForm.value, categoryForm.value.ID, 'Categories').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategory();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  resetForm(categoryForm?: NgForm) {
    if (categoryForm != null) {
      categoryForm.reset();
      this.apiService.selectedModel = [];
    }
    this.apiService.selectedModel = {
      Name: '',
      ID: 0,
      IsActive: false,
    };
    this.submitType = 'Save';
  }

  editCategory(categoryId: number): void {
    this.selectedRow = categoryId;
    this.apiService.selectedModel = new Category();
    const tempCategory =  Object.assign({}, this.category.filter(t => t.ID === this.selectedRow));
    this.apiService.selectedModel = Object.assign({}, tempCategory[0]);
    this.submitType = 'Update';
  }

  fetchFilterData(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:4201/api/Categories');
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      dub
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  bindAllCategory() {
    this.apiService.getService('Categories').subscribe((data: Category[]) => {
      this.category = data;
    });
  }
}
