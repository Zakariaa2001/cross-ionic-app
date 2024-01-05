import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router,
              private authenticationService:AuthenticationService) {}

  ngOnInit() {
    this.login();
  }

  private login() {
    let authenticated = this.authenticationService.loadToken();
    if(authenticated) {
      this.router.navigateByUrl('/menu/home');

    }else {
      this.router.navigateByUrl('/login');
    }
  }
}
