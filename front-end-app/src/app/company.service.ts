import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';
import {map} from 'rxjs/operators';
// import { request } from 'http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: Http) {}
  getAllUserCompany(){
    return this.http.get('http://localhost:3000/account/findAll').pipe(map((response:any) => response.json()))
  }
  getUserCompany(idUser){
    return this.http.get('http://localhost:3000/account/dashboard?id='+idUser).pipe(map((response:any) => response.json()))
  }
  addUserCompany(userCompany){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'http://localhost:3000/account/dashboard', 
       userCompany , 
       {headers: headers}).pipe(map((response:any) => response.json()));
       
  }
  addBonusCompany(bonusCompany){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'http://localhost:3000/account/bonus', 
       bonusCompany , 
       {headers: headers}).pipe(map((response:any) => response.json()));
  }
  getUserBonus(idUser){
    return this.http.get('http://localhost:3000/account/getUserBonus?idUser='+idUser).pipe(map((response:any) => response.json()))
  }
}
