// import { Component, OnInit } from '@angular/core';
// import {MenuItems} from '../../shared/menu-items/menu-items';

// @Component({
//   selector: 'app-company',
//   templateUrl: './company.component.html',
//   styleUrls: ['./company.component.scss']
// })
// export class CompanyComponent implements OnInit {

//   constructor(public menuItems: MenuItems) { }

//   ngOnInit() {
//   }
// }
import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Company } from '../model/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  company: Company[] = [];
  submitType = 'Save';
  selectedRow: number;
  tempFilter = [];

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(private apiService: APIService, private router: Router) {
    this.apiService.selectedModel = this.company;
    this.bindAllCompany();
  }

  ngOnInit() {
    // this.resetForm();
  }

  showSuccess() {}

  // onSubmit(priorityForm: NgForm) {
  //   if (priorityForm.value.ID === 0) {
  //     this.apiService.addService(priorityForm.value, 'Priority').subscribe(
  //       result => {
  //         this.resetForm();
  //         this.bindAllPriority();
  //         this.showSuccess();
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  //   } else {
  //     this.apiService
  //       .updateService(priorityForm.value, priorityForm.value.ID, 'Priority')
  //       .subscribe(
  //         result => {
  //           this.resetForm();
  //           this.bindAllPriority();
  //           this.showSuccess();
  //         },
  //         err => {
  //           console.log(err);
  //         }
  //       );
  //   }
  // }

  // resetForm(priorityForm?: NgForm) {
  //   this.apiService.selectedModel = {
  //     Name: '',
  //     ID: 0,
  //     DaysToCompleteTask: 0,
  //     HoursToCompleteTask: 0,
  //     MinutesToCompleteTask: 0,
  //     IncludeSaturdaysInPriorityCalculation: false,
  //     IncludeSundaysInPriorityCalculation: false,
  //     IsActive: false
  //   };
  //   this.submitType = 'Save';
  // }

  // editPriority(priorityId: number): void {
  //   this.selectedRow = priorityId;
  //   this.apiService.selectedModel = new Priority();
  //   const tempPriority = Object.assign(
  //     {},
  //     this.data.filter(t => t.ID === this.selectedRow)
  //   );
  //   this.apiService.selectedModel = Object.assign({}, tempPriority[0]);
  //   this.submitType = 'Update';
  // }

  // updateFilter(event) {
  //   const val = event.target.value.toLowerCase();
  //   const temp = this.tempFilter.filter(function(d) {
  //     return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
  //   });
  //   this.data = temp;
  // }

  bindAllPriority() {
    this.apiService.getService('GetPriority').subscribe((data: Priority[]) => {
      this.tempFilter = [...data];
      this.data = data;
    });
  }
}