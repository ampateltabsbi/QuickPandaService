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
  veriftyemailaddress: string;
  constructor(public apiService: APIService,
    private router: Router,
    private notificationService: NotificationService) {
    this.verificicationtype = localStorage.getItem('verificicationtype');
    this.veriftyemailaddress = localStorage.getItem('veriftyemailaddress');
    debugger;
  }

  ngOnInit() {
  }

  onSubmit(verificationForm: NgForm) {
    debugger;
    this.veriftyemailaddress = localStorage.setItem('CompanyId',2);
    const companyId: number = parseFloat(localStorage.getItem('CompanyId'));
    this.apiService
        .getServiceById(companyId, 'Company')
        .subscribe((data: Usermaster) => {
          debugger;
        });

    this.router.navigateByUrl('/auth/company-register');

      }

}
