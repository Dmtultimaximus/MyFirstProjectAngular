import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewsCompanyService {

  constructor(private http: Http) { }

  addNewsCompany(UserCompanyNews){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'http://localhost:3000/account/addNews', 
      UserCompanyNews , 
       {headers: headers}).pipe(map((response:any) => response.json()));
  }
  getAllNewsCompany(idCompany){
    return this.http.get('http://localhost:3000/account/getAllNews?idCompany='+idCompany).pipe(map((response:any) => response.json()))
  }
}
