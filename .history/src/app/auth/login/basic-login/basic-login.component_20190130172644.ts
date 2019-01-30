import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../../shared/services/api.service';
import { Usermaster } from '../../model/usermaster';
import { CompanyResource } from '../../model/companyresource';

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

  constructor(private activeRoute: Router, private apiService: APIService) {
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
    localStorage.setItem('isAdmin', 'true');
  }
  onLoggedin() {
    if (this.urlArrayLength === 4) {
      this.apiService.getModelByMultiplePara('CompanyResource', this.apiService.selectedModel.Email,
      this.apiService.selectedModel.Password, 'ValidateLogIn')
      .subscribe((companyresourcedata: CompanyResource[]) => {
        
        const tempdata = Object.assign({}, companyresourcedata[0]);
        debugger;
            if (companyresourcedata.IsAdmin === true) {
                 // tslint:disable-next-line:no-unused-expression
                 this.IsCompanyAdmin === 'true';
            } else {
                 // tslint:disable-next-line:no-unused-expression
                 this.IsCompanyAdmin === 'false';
            }
        localStorage.setItem('IsCompanyAdmin', this.IsCompanyAdmin);
        localStorage.setItem('UserName', tempdata[0].Name);



        localStorage.setItem('isAdmin', 'false');
        this.activeRoute.navigate(['/' + this.groupName + '/dashboard']);
      });
    }
  }
}
