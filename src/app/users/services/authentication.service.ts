import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Token {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  nativeLogin(email: string, password: string) {
    this.http
      .post<Token>('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
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
