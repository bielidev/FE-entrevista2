import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {



  constructor(private httpClient:HttpClient) { }

  getStarships(): Observable<any> {
    return this.httpClient.get("https://swapi.dev/api/starships")
  }

  getDetail(url): Observable<any> {
    return this.httpClient.get(url)
  }
}
