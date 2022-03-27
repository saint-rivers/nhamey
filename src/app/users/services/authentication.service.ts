import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface Token {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  // getCookie(name) {
  //   let cookie = "";
  //   document.cookie.split(';').forEach(function(element){
  //     let [k,v] = element.split('=');
  //     cookie[k.trim()] = v;
  //   })
  //   return cookie[name];
  // }

  nativeLogin(email: string, password: string): Observable<Token> {
    return this.http.post<Token>('http://localhost:8080/api/v1/auth/login', {
      email,
      password,
    });
  }

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '/');

  googleLogin() {
    this.http
      .get<any>('http://localhost:8080/oauth2/authorization/google', {
        headers: this.headers,
      })
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
