import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
