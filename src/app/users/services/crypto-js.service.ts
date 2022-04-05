import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

/**
 * @see https://medium.com/@malli.blogger2020/aes-encryption-and-decryption-in-angular-6-7-8-9-1079dd5b4e7a
 */
@Injectable({
  providedIn: 'root',
})
export class CryptoJsService {

  secret: string = "thesupersecretsecret";

  constructor() {}
  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data.trim(), this.secret.trim()).toString();
  }

  decrypt(data: string): string {
    return CryptoJS.AES.decrypt(data.trim(), this.secret.trim()).toString(
      CryptoJS.enc.Utf8
    );
  }
}
