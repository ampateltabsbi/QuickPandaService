import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../shared/services/api.service';
import { NotificationService } from '../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usermaster } from '../model/usermaster';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  verificicationtype: string;
  veriftyemailaddress:string;
  constructor(public apiService: APIService,
    private router: Router,
    private notificationService: NotificationService) {
    this.verificicationtype = localStorage.getItem('verificicationtype');
    this.veriftyemailaddress = localStorage.getItem('veriftyemailaddress');
  }

  ngOnInit() {
  }

  onSubmit(verificationForm: NgForm) {
    this.apiService.selectedModel.CreatedBy = localStorage.getItem('OwnerId');

    this.apiService
        .getServiceById(parse localStorage.getItem('OwnerId'), + this.groupName + '')
        .subscribe((data: Usermaster) => {
          if (data.CompanyGroupName != null) {
            apiService.setCompanyBaseUrl(data.CompanyGroupName);
            this.apiService.selectedModel = this.companyresource;
          } else {
            this.activeRoute.navigate(['/auth/login']);
            localStorage.setItem('CompanyGroupName', '');
            this.apiService.selectedModel = this.usermaster;
          }
        });

    this.router.navigateByUrl('/auth/company-register');

  }

}
