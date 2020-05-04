import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  id: string;
  titleNews: string;
  textNews: string;

  idCompany: string;
  nameBonus: string;
  priceBonus: string;

  idBonus: string;
  image: string;
  
  srcVideo: string;

  nameCompany:string;
  tegsCompany: string;
  aboutCompany: string;
  donateGoal: string;
  dateEnd: string;

  constructor(
    private http: Http
  ) { }
  addData(id, titleNews, textNews, image){
    this.id = id;
    this.titleNews = titleNews;
    this.textNews = textNews;
    this.image = image
    
  }
  addDataForDonate(idCompany, nameBonus, priceBonus){
    this.idCompany = idCompany;
    this.nameBonus= nameBonus;
    this.priceBonus= priceBonus;
  }
  addDataForDonateRedact(idBonus, nameBonus, priceBonus){
    this.idBonus = idBonus;
    this.nameBonus= nameBonus;
    this.priceBonus= priceBonus;
  }
  addDataForCompanyRedact(id, nameCompany, tegsCompany, aboutCompany, donateGoal, dateEnd, srcVideo){
    this.idCompany = id;
    this.nameCompany =nameCompany;
    this.tegsCompany = tegsCompany;
    this.aboutCompany = aboutCompany;
    this.donateGoal = donateGoal;
    this.dateEnd = dateEnd;
    this.srcVideo = srcVideo;
  }
  addDataForMore(image, titleNews, textNews){
    this.image = image;
    this.titleNews = titleNews;
    this.textNews = textNews;
    
  }

  dataFromRedact(redactNews){
    return this.http.post('http://localhost:3000/account/redactNews', redactNews).pipe(map((response:any) => response.json()))
  }

  dataFromRedactBonus(redactBonus){
    return this.http.post('http://localhost:3000/account/redactBonus', redactBonus).pipe(map((response:any) => response.json()))
  }
  dataFromDeleteNews(idNewsForDelete){
    return this.http.post('http://localhost:3000/account/deleteNews', idNewsForDelete).pipe(map((response:any) => response.json()))
  }
  dataFromDeleteBonus(idBonusForDelete){
    return this.http.post('http://localhost:3000/account/deleteBonus', idBonusForDelete).pipe(map((response:any) => response.json()))
  }
  dataFromRedactCompany(userCompany){
    return this.http.post('http://localhost:3000/account/redactCompany', userCompany).pipe(map((response:any) => response.json()))
  }
  dataFromDeleteCompany(idCompany){
    return this.http.get('http://localhost:3000/account/deleteCompany?idCompany=' + idCompany).pipe(map((response:any) => response.json()))

  }
}
