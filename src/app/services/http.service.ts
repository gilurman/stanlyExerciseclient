import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

export type Params = HttpParams | { [param: string] : string | string[] }

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8081/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public get<T>(url: string, params?: Params){
    return this.http.get<T>(this.baseUrl + url, params && {params});
  }
  public post<T>(url: string, data: any) {
    return this.http.post<T>(this.baseUrl + url, data);
  }

  public delete<T>(url: string) {
    return this.http.delete<T>(this.baseUrl + url);
  }

  public put<T>(url: string, data: any) {
    return this.http.put<T>(this.baseUrl + url, data);
  }
}

