import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

//@Injectable()
export class NotificationService {
  toastposition = '';
  constructor(private http: HttpClient, private toastyService: ToastyService) {
  }

  notify(title, msg, type): void {
    this.toastposition = 'top-right';
    const toastOptions: ToastOptions = {
      title: title,
      msg: msg,
      showClose: true,
      timeout: 5000,
      theme: 'bootstrap',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added removed!');
      }
    };

    switch (type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }
}
