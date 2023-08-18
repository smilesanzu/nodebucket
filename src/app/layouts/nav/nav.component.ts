/**
 * Title: nav.component.ts
 * Author: Professor Krasso
 * Co-Author: Janis Gonzalez
 * Date: 8/17/23
 * Description: navigation component for nodebucket application
 */

// imports statements
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export interface AppUser {
  fullName: string
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  appUser: AppUser
  isSignedIn: boolean


  constructor(private cookieService: CookieService) {
    this.appUser = {} as AppUser
    this.isSignedIn = this.cookieService.get('session_user') ? true : false
    if (this.isSignedIn) {
      this.appUser = {
        fullName: this.cookieService.get('session_name')
      }
    }
  }

  signout () {
    this.cookieService.deleteAll();
    window.location.href = '/'
  }
}
