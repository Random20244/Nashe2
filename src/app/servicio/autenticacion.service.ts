import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
 private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?email=${email}&password=${password}`);
  }

  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}

