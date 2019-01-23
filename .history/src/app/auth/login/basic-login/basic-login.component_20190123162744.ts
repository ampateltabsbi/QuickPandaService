import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern12', 'theme1');
  }

  onAdminLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
}
onCompanymLoggedin() {
  localStorage.setItem('isLoggedin', 'true');
}

}
