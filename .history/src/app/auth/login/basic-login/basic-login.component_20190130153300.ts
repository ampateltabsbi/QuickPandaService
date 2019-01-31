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
  
  usermaster: Usermaster[] = [];
  companyresource: CompanyResource[] = [];

  constructor(private activeRoute: Router, private apiService: APIService) {
    this.apiService.selectedModel = this.usermaster;
    const urlArray = activeRoute.url.split('/');
    if (urlArray.length === 4) {
      this.apiService
        .getService('GetUserMasterByGroupName/' + urlArray[1] + '')
        .subscribe((data: Usermaster) => {
          if (data.CompanyGroupName != null) {
            apiService.setCompanyBaseUrl(data.CompanyGroupName);
            alert(localStorage.getItem('CompanyGroupName'));
            alert(apiService.baseUrl);
          } else {
            alert('Invalid URL');
            this.activeRoute.navigate(['/auth/login']);
            localStorage.setItem('CompanyGroupName', '');
            alert(apiService.baseUrl);
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
  onCompanyLoggedin() {
    localStorage.setItem('isAdmin', 'false');
  }
}
