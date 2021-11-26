import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private loginService : LoginService) {

    this.loginForm = new FormGroup({
      'email' : new FormControl(''),
      'senha' : new FormControl('')
    })

   }

  ngOnInit(): void {


  }

  logar(){
    let email = this.loginForm?.controls['email'].value;
    let senha = this.loginForm?.controls['senha'].value;
    this.loginService.loginUser(email,senha)
    console.log(this.loginForm.value)
  }

}
