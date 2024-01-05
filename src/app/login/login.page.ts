import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authenticationService:AuthenticationService,
              private router:Router) { }

  ngOnInit() {
  }
  onLogin(user:any){
    let res = this.authenticationService.login(user.username,user.password);
    if(res) {
      this.router.navigateByUrl('/menu')
    }else {
      this.router.navigateByUrl('/login')
    }
  }
}
