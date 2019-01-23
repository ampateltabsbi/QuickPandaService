import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Categorydescription } from '../model/categorydescription';
import { Categorytype } from '../model/categorytype';

@Component({
  selector: 'app-categorydescription',
  templateUrl: './categorydescription.component.html',
  styleUrls: ['./categorydescription.component.scss']
})
export class CategorydescriptionComponent implements OnInit {

  categorydescription: Categorydescription[] = [];
  categorytype: Categorytype[] = [];
  tempFilter = [];
  submitType = 'Save';
  selectedRow: number;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public searchString: string;

  constructor(private apiService: APIService, private router: Router) {
     this.apiService.selectedModel = Categorydescription;
     this.bindAllCategorydescription();
     this.bindActiveCategoryType();
   }

   ngOnInit() {
    this.resetForm();
  }

  onSubmit(categorydescriptionForm: NgForm) {
    if (categorydescriptionForm.value.ID === 0) {
      this.apiService.addService(categorydescriptionForm.value, 'CategoryDescriptions').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategorydescription();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService.updateService(categorydescriptionForm.value, categorydescriptionForm.value.ID, 'CategoryDescriptions').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategorydescription();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  resetForm(categorydescriptionForm?: NgForm) {
    this.apiService.selectedModel = {
      Name: '',
      ID: 0,
      CategoryTypeID: 0,
      IsActive: false,
    };
    this.submitType = 'Save';
  }

  editCategorydescription(categorydescriptionId: number): void {
    this.selectedRow = categorydescriptionId;
    this.apiService.selectedModel = new Categorydescription();
    const tempCategoryType  =  Object.assign({}, this.data.filter(t => t.ID === this.selectedRow));
    this.apiService.selectedModel = Object.assign({}, tempCategoryType[0]);
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllCategorydescription() {
    this.apiService.getService('CategoryDescriptions').subscribe((data: Categorydescription[]) => {
      this.tempFilter = [...data];
      this.data = data;
    });
  }

  bindActiveCategoryType() {
    this.apiService.getModelListbyActive('CategoryType', 'GetActiveCategoryTypes').subscribe((data: Categorytype[]) => {
      this.categorytype = data;
    });
  }
}
