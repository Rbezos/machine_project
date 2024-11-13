import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  getMenuElements(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/v1/menu/');
  }
}