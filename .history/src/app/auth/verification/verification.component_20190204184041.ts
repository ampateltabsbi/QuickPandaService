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
  }

  ngOnInit() {
    this.resetForm();
    this.apiService.selectedModel = this.company;
  }

  resetForm(companyForm?: NgForm) {
    this.apiService.selectedModel = {
      VerifyCode1: '',
      VerifyCode2: '',
      VerifyCode3: '',
      VerifyCode4: '',
      VerifyCode5: '',
      VerifyCode6: ''
    };
  }

  onSubmit(verificationForm: NgForm) {
    debugger;
    localStorage.setItem('CompanyId', '27');
    const companyId: number = parseFloat(localStorage.getItem('CompanyId'));

    this.verifyCode = verificationForm.value.VerifyCode1 + '' + verificationForm.value.VerifyCode1;
    this.verifyCode = this.verifyCode + '' + verificationForm.value.VerifyCode3;
    this.verifyCode = this.verifyCode + '' + verificationForm.value.VerifyCode4;
    this.verifyCode = this.verifyCode + '' + verificationForm.value.VerifyCode5;
    this.verifyCode = this.verifyCode + '' + verificationForm.value.VerifyCode6;

    this.apiService
        .getModelByMultiplePara('Company', companyId, this.verifyCode, 'VerifyEmailCode')
        .subscribe((data: Company) => {
          debugger;
if(data=='')
          this.router.navigateByUrl('/auth/company-register');

        });
      }

}
