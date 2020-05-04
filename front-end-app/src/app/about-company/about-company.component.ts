import { Component, OnInit } from '@angular/core';
import {Http , Headers} from '@angular/http';
import {Router} from '@angular/router'
import { CompanyService } from '../company.service';
import { AboutService } from '../about.service';
import { AuthService } from '../auth.service';
import { NewsCompanyService } from '../news-company.service';
import { TransferDataService } from '../transfer-data.service';
import { UserCompany} from '../../../../models/UserCompany'
import { UserCompanyBonus} from '../../../../models/UserCompanyBonus'
import { UserCompanyScore} from '../../../../models/UserCompanyScore'
import { UserCompanyNews} from '../../../../models/UserCompanyNews'
import {DataDonateService, donate } from '../data-donate.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.css']
})
export class AboutCompanyComponent implements OnInit {
  aboutCompany: UserCompany
  thisCompanyBonus: UserCompanyBonus
  chekData: UserCompanyScore
  dataNews: UserCompanyNews
  trigger: boolean = false
  chekDataOwner: boolean
  progressBar:string
  userScore: string
  imageNews: string
  videoURL: string
  safeURL: SafeResourceUrl
  constructor(
    private aboutService: AboutService,
    private newsService: NewsCompanyService,
    private transferService: TransferDataService,
    private authService: AuthService,
    private router: Router,
    private dataDonateService: DataDonateService,
    private _sanitizer: DomSanitizer,
    
  ) { }

  ngOnInit() {
    this.newsService.getAllNewsCompany(localStorage.getItem('company')).subscribe((data:UserCompanyNews) => {
      this.dataNews = data;
      
    });
    
    
    this.aboutService.getCompanyFromHome((localStorage.getItem('company'))).subscribe((data:UserCompany) => {
      this.aboutCompany = data;
      

      this.videoURL = this.aboutCompany[0].srcVideo;
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);

      
      this.progressBar = ((this.aboutCompany[0].parentDonat)/(this.aboutCompany[0].donateGoal)*100).toFixed(0)+'%' ;
      this.userScore =(this.aboutCompany[0].UserScore).toFixed(3)
      
      // const donate = new BehaviorSubject(this.aboutCompany[0].parentDonat);
      // donate.subscribe(console.log)
      // donate.next(this.aboutCompany[0].parentDonat)
    });

    this.aboutService.getAllBonusCompany((localStorage.getItem('company'))).subscribe((data:UserCompanyBonus) =>{
      this.thisCompanyBonus = data;
    });

    const chekData = {
      idCompany: localStorage.getItem('company'),
      idUser: JSON.parse(localStorage.getItem('user')).id,
    }
    this.aboutService.guardScore(chekData).subscribe((data:UserCompanyScore) =>{
      if (data == null)
        this.chekData = true;
      else
        this.chekData = false; 
    });

    const chekOwner = {
      idCompany: localStorage.getItem('company'),
      idUser: JSON.parse(localStorage.getItem('user')).id,
    }
    this.aboutService.guardOwner(chekOwner).subscribe((data:UserCompanyBonus) =>{
      
      if (data == null)
        this.chekDataOwner = false;
      else
        this.chekDataOwner = true; 
     
    });

  }
  addData(idCompany,nameBonus,priceBonus ){
    this.transferService.addDataForDonate(idCompany,nameBonus,priceBonus)
    this.router.navigate(['/addDonate']); 
  }
  addScore(idCompany,score){

    this.trigger = !this.trigger;
    
    
    const dataForScore = {
      idCompany: idCompany,
      idUser: JSON.parse(localStorage.getItem('user')).id,
      UserScore: score,
    }
    this.aboutService.addScore(dataForScore).subscribe((data: UserCompany) =>{
      this.aboutCompany = data
    });
    this.aboutService.addScoreData(dataForScore).subscribe((data: UserCompany) =>{
      this.aboutCompany = data
    });
    
  }
  addDataAndRedact(id, titleNews, textNews, image){
    this.transferService.addData(id, titleNews, textNews, image)
    
 
  }
  addDataForMore(image, titleNews, textNews){
    this.transferService.addDataForMore(image, titleNews, textNews)
    this.router.navigate(['newsRead'])
 
  }
  addDataAndRedactBonus(idBonus, nameBonus, priceBonus){
    this.transferService.addDataForDonateRedact(idBonus, nameBonus, priceBonus)
    
    
  }
}


