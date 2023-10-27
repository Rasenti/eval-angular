import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICoinData} from "./ICoin";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private http: HttpClient) { }

  url: string = "https://api.coincap.io/v2/assets/";

  fetchAll() {
    return this.http.get<ICoinData>(this.url).pipe(map((data) => data as ICoinData));
  }
}
