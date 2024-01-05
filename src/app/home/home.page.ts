import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public contact = {
    name:"zakaria",
    email:"zak@gmail.com",
    tel:"0696900397",
    logImg:"assets/images/fit.jpg",
    locationImg:"assets/images/location.png"
  }

}
