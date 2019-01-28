
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
    this.apiService.selectedModel = this.usermaster;
  }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(ownerForm: NgForm) {
  }

  resetForm(ownerForm?: NgForm) {
    this.apiService.selectedModel = {
      ID: 0,
   FirstName: '',
   LastName: string;
   Email: string;
   Phone: string;
   CompanyGroupName: string;
   Password: string;
    };
    this.submitType = 'Save';
  }
}
