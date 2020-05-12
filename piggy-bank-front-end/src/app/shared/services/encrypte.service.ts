import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncrypteService {

  constructor() { }

  set(value: any) {
    var key = CryptoJS.enc.Utf8.parse('123456$#@$^@1ERF');
    var iv = CryptoJS.enc.Utf8.parse('123456$#@$^@1ERF');
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

    return encrypted.toString();
  }

}
