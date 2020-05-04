import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: Http) { }
  getCompanyFromHome(idCompany){
    return this.http.get('http://localhost:3000/account/getFromHome?idCompany='+idCompany).pipe(map((response:any) => response.json()));
  }
  addDonate(dataForDonate){
    return this.http.post('http://localhost:3000/account/addDonate', dataForDonate ).pipe(map((response:any) => response.json()));
  }
  getAllBonusCompany(idCompany){
    return this.http.get('http://localhost:3000/account/getBonusCompany?idCompany='+idCompany).pipe(map((response:any) => response.json()));
  }
  addScore(dataForScore){
    
    return this.http.post('http://localhost:3000/account/addScore', dataForScore ).pipe(map((response:any) => response.json()));
  }
  addScoreData(dataForScore){
    return this.http.post('http://localhost:3000/account/addScoreData', dataForScore ).pipe(map((response:any) => response.json()));
  }
  guardScore(checkData){
    return this.http.post('http://localhost:3000/account/chekUser', checkData).pipe(map((response:any) => response.json()))
  }
  guardOwner(checkOwner){
    return this.http.post('http://localhost:3000/account/chekOwner', checkOwner).pipe(map((response:any) => response.json()))
  }
  addBonusForDonate(dataForBonus){
    return this.http.post('http://localhost:3000/account/addBonusForUser', dataForBonus).pipe(map((response:any) => response.json()))
  }
  isMark(){
    
  }
}


