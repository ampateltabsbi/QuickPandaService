
import { Injectable } from '@angular/core';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';

@Injectable()

export class NotificationService {
  position = 'top-right';

  notify(title, msg, type) {

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
