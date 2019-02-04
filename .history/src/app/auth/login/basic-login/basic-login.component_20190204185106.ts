import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../../shared/services/api.service';
import { Usermaster } from '../../model/usermaster';
import { CompanyResource } from '../../model/companyresource';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  public urlArrayLength = 0;
  public groupName = '';
  usermaster: Usermaster[] = [];
  companyresource: CompanyResource[] = [];
  public IsCompanyAdmin = '';
  data1: any;

  constructor(private activeRoute: Router, public apiService: APIService, private notificationService: NotificationService) {
    debugger;
    this.apiService.selectedModel = this.usermaster;
    const urlArray = activeRoute.url.split('/');
    this.urlArrayLength = urlArray.length;

    if (this.urlArrayLength === 4) {
      this.groupName = urlArray[1];
      this.apiService
        .getService('GetUserMasterByGroupName/' + this.groupName + '')
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
    }
  }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern12', 'theme1');
  }
  onAdminLoggedin() {
    debugger;
    localStorage.setItem('isAdmin', 'true');
    this.activeRoute.navigate(['/admin/deshboard']);
  }
  onLoggedin() {
    debugger;
    localStorage.setItem('IsCompanyAdmin', '');
    localStorage.setItem('UserName', '');
    localStorage.setItem('UserID', '');
    localStorage.setItem('UserCompanyID', '');
    localStorage.setItem('isAdmin', '');
    localStorage.setItem('CompanyGroupName', '');
    localStorage.setItem('SelectedCompanyID', '');

    if (this.urlArrayLength === 4) {
      this.apiService
        .getModelByMultiplePara(
          'CompanyResource',
          this.apiService.selectedModel.Email,
          this.apiService.selectedModel.Password,
          'ValidateLogIn'
        )
        .subscribe((companyresourcedata: CompanyResource[]) => {
            this.data1 = companyresourcedata;
            if ( this.data1.ID > 0) {
            if (this.data1.IsAdmin === true) {
              // tslint:disable-next-line:no-unused-expression
              this.IsCompanyAdmin = 'true';
            } else {
              // tslint:disable-next-line:no-unused-expression
              this.IsCompanyAdmin = 'false';
            }
            localStorage.setItem('IsCompanyAdmin', this.IsCompanyAdmin);
            localStorage.setItem('UserName', this.data1.Name);
            localStorage.setItem('UserID', this.data1.ID);
            localStorage.setItem('UserCompanyID', this.data1.CompanyID);
            localStorage.setItem('isAdmin', 'false');
            this.activeRoute.navigate(['/' + this.groupName + '/dashboard']);
          } else {
            this.notificationService.notify('Error', 'Incorrect Email Address or Password.', 'error');
          }
        });
    } else if (this.urlArrayLength === 3) {
      onAdminLoggedin();
    }
  }
}
