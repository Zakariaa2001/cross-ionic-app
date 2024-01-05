import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  city!:string;
  dataMeteo!:any;
  constructor(private meteoService:MeteoService) { }

  ngOnInit() {
  }

  onLoadMeteo(){
    this.meteoService.getMeteo(this.city)
        .subscribe(data=> {
          this.dataMeteo=data;
          console.log(this.dataMeteo)
        },err => {
          console.log(err)
        }
        );
  }

}
