
// declare var $: any;
// declare var Morris: any;
import 'd3';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Category } from '../model/category';
import { Categorytype } from './../model/categorytype';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-categorytype',
  templateUrl: './categorytype.component.html',
  styleUrls: ['./categorytype.component.scss']
})
export class CategorytypeComponent implements OnInit {
  categorytype: Categorytype[] = [];
  category: Category[] = [];
  submitType = 'Save';
  selectedRow: number;
  // totalRec: number;
  // page = 1;
  public searchString: string;
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';


  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  timeout = 5000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  constructor(private apiService: APIService, private router: Router, private toastyService: ToastyService) {
    this.apiService.selectedModel = Categorytype;
    this.bindAllCategorytype();
    this.bindActiveCategory();
  }

  ngOnInit() {
     this.resetForm();
  }

  showSuccess() {
    this.addToast({
    title: 'Bootstrap Toasty',
    msg: 'Turning standard Bootstrap alerts into awesome notifications',
    timeout: 5000,
    theme: 'bootstrap',
    position: 'bottom-right',
    type: 'success'});
  }

  addToast(options) {
    debugger;
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added removed!');
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }

  onSubmit(categorytypeForm: NgForm) {
    if (categorytypeForm.value.ID === 0) {
      this.apiService.addService(categorytypeForm.value, 'CategoryTypes').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategorytype();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService.updateService(categorytypeForm.value, categorytypeForm.value.ID, 'CategoryTypes').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategorytype();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  resetForm(categorytypeForm?: NgForm) {
    // if (categorytypeForm != null) {
      // categorytypeForm.reset();
      // this.apiService.selectedModel = [];
    // }
    this.apiService.selectedModel = {
      Name: '',
      ID: 0,
      CategoryID: 0,
      IsActive: false,
    };
    this.submitType = 'Save';
  }

  editCategorytype(categorytypeId: number): void {
    this.selectedRow = categorytypeId;
    this.apiService.selectedModel = new Categorytype();
    const tempCategoryType =  Object.assign({}, this.categorytype.filter(t => t.ID === this.selectedRow));
    this.apiService.selectedModel = Object.assign({}, tempCategoryType[0]);
    this.submitType = 'Update';
  }

  bindAllCategorytype() {
    this.apiService.getService('CategoryTypes').subscribe((data: Categorytype[]) => {
      this.categorytype = data;
    });
  }

  bindActiveCategory() {
    this.apiService.getModelListbyActive('Categories', 'GetActiveCategories').subscribe((data: Category[]) => {
      const filterData = data;
      this.category = filterData;
    });
  }
}
