import { Component, OnInit  } from '@angular/core';
// declare var $: any;
// declare var Morris: any;
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Status } from '../model/status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  status: Status[] = [];
  submitType = 'Save';
  selectedRow: number;
  tempFilter = [];

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(private apiService: APIService, private router: Router) {
     this.apiService.selectedModel = this.status;
     this.bindAllStatus();
   }

   ngOnInit() {
    this.resetForm();
  }

  showSuccess() {
  }

  onSubmit(statusForm: NgForm) {
    if (statusForm.value.ID === 0) {
      this.apiService.addService(statusForm.value, 'Status').subscribe(
        result => {
          this.resetForm();
          this.bindAllStatus();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService.updateService(statusForm.value, statusForm.value.ID, 'Status').subscribe(
        result => {
          this.resetForm();
          this.bindAllStatus();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  resetForm(categoryForm?: NgForm) {
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
    const tempCategory =  Object.assign({}, this.data.filter(t => t.ID === this.selectedRow));
    this.apiService.selectedModel = Object.assign({}, tempCategory[0]);
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
    this.apiService.getService('Categories').subscribe((data: Category[]) => {
      this.tempFilter = [...data];
      this.data = data;
    });
  }
}