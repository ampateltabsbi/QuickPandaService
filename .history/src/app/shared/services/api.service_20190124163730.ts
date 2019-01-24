import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class APIService {
  selectedModel: any;
  public isCompanyDB: 'false';
  baseUrl = 'http://localhost:4201/api/';
  constructor(private http: HttpClient) {
    debugger;
    if (this.isCompanyDB === 'true') {
      this.baseUrl = 'http://localhost:4201/api/0/';
    }
  }

  getService(modelName) {
    return this.http.get(this.baseUrl + modelName).pipe(
      map(res => {
        return res;
      })
    );
  }

  addService(model, modelName): Observable<any> {
    console.log(model);
    return this.http
      .post<any>(this.baseUrl + modelName, JSON.stringify(model), httpOptions)
      .pipe(catchError(this.handleError<any>('addService')));
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

  getModelListById = function(model, modeId, apiName) {
    return this.http.get(this.baseUrl + apiName + '/' + modeId, model);
  };

  private handleError<T>(operation = 'operation', result?: T) {
    // return (error: any): Observable<T> => {
    //   console.error(error);
    //   console.log(`${operation} failed: ${error.message}`);
    //   return of(result as T);
    // };
    return null;
  }
}
