import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var Morris: any;
import 'd3';
import * as c3 from 'c3';
import { APIService } from '../../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Category } from '../model/category';
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
  submitType = 'Save';
  selectedRow: number;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  public searchString: string;

  constructor(private apiService: APIService, private router: Router) {
     this.apiService.selectedModel = this.Categorydescription;
     this.bindAllCategorydescription();
     this.bindActiveCategoryType();
   }

   ngOnInit() {
    this.resetForm();
  }

  onSubmit(categorydescriptionForm: NgForm) {
    if (categorydescriptionForm.value.ID === 0) {
      this.apiService.addService(categorydescriptionForm.value, 'Categoriesdescription').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategorydescription();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService.updateService(categorydescriptionForm.value, categorydescriptionForm.value.ID, 'Categoriesdescription').subscribe(
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
    if (categorydescriptionForm != null) {
      categorydescriptionForm.reset();
      this.apiService.selectedModel = [];
    }
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
    const tempCategoryType  =  Object.assign({}, this.categorydescription.filter(t => t.ID === this.selectedRow));
    this.apiService.selectedModel = Object.assign({}, tempCategoryType[0]);
    this.submitType = 'Update';
  }

  bindAllCategorydescription() {
    this.apiService.getService('Categoriesdescription').subscribe((data: Categorydescription[]) => {
      this.categorydescription = data;
    });
  }

}
