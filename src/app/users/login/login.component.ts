import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CryptoJsService } from 'src/app/crypto-js/crypto-js.service';
import { AuthenticationService } from 'src/app/users/services/authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  rememberMe: boolean = false;

  constructor(
    private cryptoService: CryptoJsService,
    private authService: AuthenticationService,
    private cookie: CookieService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  credentials = this.formBuilder.group({
    email: this.email,
    password: this.password,
  });

  ngOnInit(): void {}

  loginUser(): void {
    this.authService
      .nativeLogin(
        this.credentials.get('email')?.value,
        this.credentials.get('password')?.value
      )
      .subscribe({
        next: (data) => {
          var jwt = JSON.stringify(data.token);
          jwt = this.cryptoService.encrypt(jwt);

          if (this.rememberMe) {
            this.cookie.set('nhameyt', jwt);
          } else {
            window.sessionStorage.setItem('nhameyt', jwt);
          }
          this.router.navigateByUrl('/orders');
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  googleLogin(): void {
    this.authService.googleLogin();
  }

  onChange(isChecked: boolean) {
    console.log(isChecked);
    this.rememberMe = isChecked;
  }

  setRememberMe(e: Event) {
    this.rememberMe = (<HTMLInputElement>e.target).checked;
    console.log(this.rememberMe);
  }
}
