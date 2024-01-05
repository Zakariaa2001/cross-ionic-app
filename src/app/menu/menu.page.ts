import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menus = [
    {title:'Home',url:'/menu/home',icon:'home'},
    {title:'Meteo',url:'/menu/meteo',icon:'snow'},
    {title:'Gallery',url:'/menu/gallery',icon:'school'},
    {title:'Locations',url:'/menu/locations',icon:'location'},
    {title:'Logout',url:'/logout',icon:'log-out'},
  ]
  constructor(private router:Router,
              private authService:AuthenticationService) { }

  ngOnInit() {
  }
  onMenuItem(m:any) {
    if (m.url=='/logout') {
      this.authService.logout();
      this.router.navigateByUrl('/login')
    }else {
      this.router.navigateByUrl(m.url)
    }
  }
}
