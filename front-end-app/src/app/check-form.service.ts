import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckFormService {
  // name: string;
  // login: string;
  // email: string;
  // password: string;
  
  constructor(
    private http:Http,
  ) { }

  checkLoginEmployed(user){

    
    return this.http.post('http://localhost:3000/account/chekLogin', user)
    .pipe(map((response:any) => response.json()));
  }

  checkEmailEmployed(user){
    return this.http.post('http://localhost:3000/account/chekEmail', user)
    .pipe(map((response:any) => response.json()));
  }

  checkTitleNews(tittleNews){
    if(tittleNews == (undefined || ""))
    return false;
  else
    return true;
  }
  checkTextNews(TextNews){
    if(TextNews == (undefined || ""))
    return false;
  else
    return true;
  }
  checkNameCompany(nameCompany){
    if(nameCompany == undefined)
      return false;
    else
      return true;
  }

  checkTagsCompany(tagsCompany){
    if(tagsCompany == undefined)
      return false;
    else
      return true;
  }

  checkAboutCompany(aboutCompany){
    if(aboutCompany == undefined)
      return false;
    else
      return true;
  }

  checkName(name){
    if(name == undefined)
      return false;
    else
      return true;
  }

  checkLogin(login){
    if(login == undefined)
      return false;
    else
      return true;
  }

  checkEmail(email){
    if(email == undefined)
      return false;
    else
      return true;
  }

  checkPassword(password){
    if(password == undefined)
      return false;
    else
      return true;
  }

}
