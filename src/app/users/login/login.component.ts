import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/users/services/authentication.service';

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
    private authService: AuthenticationService,
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
          jwt = this.encrypt(jwt);

          if (this.rememberMe) {
            // todo: replace this with cookie storage
            localStorage.setItem('jwt', jwt);
          } else {
            window.sessionStorage.setItem('jwt', jwt);
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

  /**
   * @see https://medium.com/@malli.blogger2020/aes-encryption-and-decryption-in-angular-6-7-8-9-1079dd5b4e7a
   * @type null
   * @memberof LoginComponent
   */
  encrypt(data: string): string {
    return data;
    // todo: encrypt jwt before storage
    // this.encryptedMessage = CryptoJS.AES.encrypt( this.message.trim(), this.password.trim()).toString();
    // this.decryptedMessage = CryptoJS.AES.decrypt( this.encryptedMessage,  this.password.trim() ).toString(CryptoJS.enc.Utf8);
  }
}
