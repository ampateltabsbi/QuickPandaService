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
  verifyCode: string;

  constructor(public apiService: APIService,
    private router: Router,
    private notificationService: NotificationService) {
    this.verificicationtype = localStorage.getItem('verificicationtype');
    this.veriftyemailaddress = localStorage.getItem('veriftyemailaddress');
    debugger;
  }

  ngOnInit() {
    this.resetForm();
    this.apiService.selectedModel = this.company;
  }

  resetForm(companyForm?: NgForm) {
    this.apiService.selectedModel = {
      VeriCode1: '',
      VeriCode1: '',
      VeriCode1: '',
      VeriCode1: '',
      VeriCode1: '',
      VeriCode1: '',
    };
    this.submitType = 'Save';
  }

  onSubmit(verificationForm: NgForm) {
    debugger;
    localStorage.setItem('CompanyId', '27');
    const companyId: number = parseFloat(localStorage.getItem('CompanyId'));

    this.verifyCode = verificationForm.value.VeriCode1 + '' + this.apiService.selectedModel.VeriCode2;
    this.verifyCode = this.verifyCode + '' + this.apiService.selectedModel.VeriCode3;
    this.verifyCode = this.verifyCode + '' + this.apiService.selectedModel.VeriCode4;
    this.verifyCode = this.verifyCode + '' + this.apiService.selectedModel.VeriCode5;
    this.verifyCode = this.verifyCode + '' + this.apiService.selectedModel.VeriCode6;

    this.apiService
        .getModelByMultiplePara('Company', companyId, this.verifyCode, 'VerifyEmailCode')
        .subscribe((data: Company) => {
          debugger;
        });

    this.router.navigateByUrl('/auth/company-register');

      }

}
