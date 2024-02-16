import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  isLoggedIn() {
    return sessionStorage.getItem('currentUser')
  }
}
