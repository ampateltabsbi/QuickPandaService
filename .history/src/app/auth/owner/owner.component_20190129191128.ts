import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../shared/services/api.service';
import { NotificationService } from '../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usermaster } from '../model/usermaster';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  usermaster: Usermaster[] = [];
  submitType = 'Save';


  constructor(
    private apiService: APIService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    debugger;
    this.apiService.selectedModel = this.usermaster;
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

  onSubmit(ownerForm: NgForm) {
    this.apiService.addService(ownerForm.value, 'UserMasters').subscribe(
      result => {
        debugger;
        localStorage.setItem('OwnerId', result.ID);
        localStorage.setItem('veriftyemailaddress', this.apiService.selectedModel.Email);
        this.showSuccess();
        this.resetForm();
        this.router.navigateByUrl('/auth/company-register');
      },
      err => {
        console.log(err);
      }
    );
    localStorage.setItem('OwnerId', '2');

    this.router.navigateByUrl('/auth/company-register');

  }

  resetForm(ownerForm?: NgForm) {
    this.apiService.selectedModel = {
      ID: 0,
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
      CompanyGroupName: '',
      Password: ''
    };
    this.submitType = 'Save';
  }
}