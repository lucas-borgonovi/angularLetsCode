import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authentication: boolean = false;

  constructor(private router: Router) { }


  loginUser(email: string, password: string) {
    this.authentication = (email === 'admin@admin.com' && password === '123456');
    console.log(this.authentication);
    // this.mostrarMenu.emit(this.authentication);

    if (this.authentication) this.router.navigate(['list']);
  }

  logoutUser() {
    this.authentication = false;
    // this.mostrarMenu.emit(this.authentication);
    this.router.navigate(['login']);
  }

  userIsLoggedIn(): boolean {
    return this.authentication;
  }
}
