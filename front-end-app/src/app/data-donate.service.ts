import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import { share, delay } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataDonateService {

  constructor(private http:Http,) { }
  // public getDonate(): Observable<donate[]>{
  //   return this.http.get<donate[]>('donate.json').pipe(share(), delay(2000));

  // }
  addDataForDonate(dataForDonate){

  }
}
export interface donate{
  idCompany: string,
  nameBonus: string,
  priceBonus: string,
}
