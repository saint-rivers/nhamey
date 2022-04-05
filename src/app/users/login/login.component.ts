import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/users/services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { CryptoJsService } from '../services/crypto-js.service';

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

  /**
   * Sends login credentials and stores them on the computer
   * @see https://techspawn.com/localstorage-session-storage-or-cookies-in-angular/
   * @author https://github.com/saint-rivers
   */
  loginUser(): void {
    const userEmail = this.credentials.get('email')?.value;
    const userPassword = this.credentials.get('password')?.value;

    if (userEmail === '' || userPassword === '') {
      // contains invalid fields
      return;
    }
    this.authService.nativeLogin(userEmail, userPassword).subscribe({
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
