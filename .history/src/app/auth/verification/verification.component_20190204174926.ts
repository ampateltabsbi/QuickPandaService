import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../shared/services/api.service';
import { NotificationService } from '../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Company } from '../model/company';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  company: Company[] = [];
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
    this.apiService.selectedModel = this.company;
  }

  onSubmit(verificationForm: NgForm) {
    debugger;
    localStorage.setItem('CompanyId', '27');
    const companyId: number = parseFloat(localStorage.getItem('CompanyId'));
    var verifyCode = this.apiService.selectedModel.VeriCode1 +''+ this.apiService.selectedModel.VeriCode2 +''+ this.apiService.selectedModel.VeriCode3 + this.apiService.selectedModel.VeriCode1 + this.apiService.selectedModel.VeriCode1 + this.apiService.selectedModel.VeriCode1
    this.apiService
        .getModelByMultiplePara('Company', companyId, '', 'VerifyEmailCode')
        .subscribe((data: Company) => {
          debugger;
        });

    this.router.navigateByUrl('/auth/company-register');

      }

}
