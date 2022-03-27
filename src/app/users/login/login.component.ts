import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/users/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  credentials = new FormGroup({
    email: this.email,
    password: this.password,
  });

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  loginUser(): void {
    alert(`${this.email.value} ${this.password.value}`);
    this.authService.nativeLogin(this.email.value, this.password.value);
  }
  
  googleLogin(): void {
    this.authService.googleLogin();
  }
}
