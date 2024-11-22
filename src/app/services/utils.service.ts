import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  getMenuElements(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/v1/menu/');
  }

  getMachines(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/v1/machines/');
  }

  private showModalSubject = new Subject<void>();

  showModal$ = this.showModalSubject.asObservable();

  triggerModal() {
    this.showModalSubject.next();
  }
}