
import { Injectable } from '@angular/core';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';

@Injectable()

export class NotificationService {
  toastposition = 'top-right';

  constructor(private toastyService: ToastyService) {    
  }

  notify(title, msg, type) {
    this.toastposition = 'top-right';
    const toastOptions: ToastOptions = {
      title: 'Success',
      msg: 'Record successfully save.',
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
    this.toastyService.success(toastOptions);
  }

  selectedModel: any;
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:4201/api/';

  getService(modelName) {
    return this.http.get(this.baseUrl + modelName).pipe(map(res => {
      return res;
    }));
  }

  addService (model, modelName): Observable<any> {
    console.log(model);
    return this.http.post<any>(this.baseUrl + modelName, JSON.stringify(model), httpOptions).pipe(
      catchError(this.handleError<any>('addService'))
    );
  }

  getServiceById(id: number, modelName) {
    return this.http.get<any>(this.baseUrl + modelName + '/' + id);
  }

  getModelListbyActive = function(modelName, apiName) {
    return this.http.get(this.baseUrl + apiName, modelName);
  };
  updateService(model, modeId, modelName) {
    return this.http.put(this.baseUrl + modelName + '/' + modeId, model);
  }

  getModelListById = function (model, modeId, apiName) {
    return this.http.get(this.baseUrl + apiName + '/' + modeId, model);
};

  private handleError<T> (operation = 'operation', result?: T) {
    // return (error: any): Observable<T> => {
    //   console.error(error);
    //   console.log(`${operation} failed: ${error.message}`);
    //   return of(result as T);
    // };
    return null;
  }
}
