import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient:HttpClient) { }

  public getMeteo(city:string) {
    return this.httpClient.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=803314a2a232a0d26e2447e5f8dcfb62");

  }
}
