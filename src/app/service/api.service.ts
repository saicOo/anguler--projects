import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public configUrl ="http://localhost:3000/collection"
  constructor(private http : HttpClient) { }
  get() :Observable<any>{
    return this.http.get<any>(this.configUrl)
  }
  getById(id) :Observable<any>{
    return this.http.get<any>(this.configUrl + `/${id}`);
  }
  post(object) :Observable<any>{
    return this.http.post<any>(this.configUrl, object);
  }
  delete(id) :Observable<any>{
    return this.http.delete<any>(this.configUrl + `/${id}`)
  }
  put(object,id) :Observable<any>{
    return this.http.put<any>(this.configUrl + `/${id}`,object);
  }
}
