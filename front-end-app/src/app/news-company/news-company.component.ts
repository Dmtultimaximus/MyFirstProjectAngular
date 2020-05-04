import { Component, OnInit } from '@angular/core';
import {Http , Headers} from '@angular/http';
import {Router} from '@angular/router'
import { CompanyService } from '../company.service';
import { AboutService } from '../about.service';
import { AuthService } from '../auth.service';
import { NewsCompanyService } from '../news-company.service';
import { UserCompany} from '../../../../models/UserCompany'
import { UserCompanyBonus} from '../../../../models/UserCompanyBonus'
import { UserCompanyScore} from '../../../../models/UserCompanyScore'
import { UserCompanyNews} from '../../../../models/UserCompanyNews'
import {FlashMessagesService} from 'angular2-flash-messages'
import { CheckFormService} from '../check-form.service';

@Component({
  selector: 'app-news-company',
  templateUrl: './news-company.component.html',
  styleUrls: ['./news-company.component.css']
})
export class NewsCompanyComponent implements OnInit {
  titleNews: string;
  textNews: string;
  Image:any;
  dataNews: UserCompanyNews;
  news: UserCompanyNews;
  constructor(
    private flashMessages: FlashMessagesService,
    private router: Router,
    private checkForm: CheckFormService,
    private newsService: NewsCompanyService,  
  ) { }

  ngOnInit() {


  }
  addCompanyNews(){
    const UserCompanyNews = {
      idUser: JSON.parse(localStorage.getItem('user')).id,
      idCompany: localStorage.getItem('company'),
      titleNews: this.titleNews,
      textNews: this.textNews,
      image: this.Image
    };
    
  
   
    if(!this.checkForm.checkNameCompany(UserCompanyNews.titleNews)) {
      this.flashMessages.show("Введите заголовок новости",{
        cssClass:'alert-danger',
        timeout: 4000
      });
      return false;
    } else if(!this.checkForm.checkTagsCompany(UserCompanyNews.textNews)) {
      this.flashMessages.show("Введите текст новости",{
        cssClass:'alert-danger',
        timeout: 4000
      });
        return false;
    } 

    this.newsService.addNewsCompany(UserCompanyNews).subscribe(data =>{
      if(!data.success){
        this.flashMessages.show(data.msg, {
          cssClass:'alert-danger',
          timeout: 4000
      });
        this.router.navigate(['/about']);
      } else {
        this.flashMessages.show(data.msg, {
          cssClass:'alert-success',
          timeout: 2000
          }
        );
        
        // this.idCompany = data.msg;
        this.router.navigate(['/about']);
        
      }
    });  
  }

  LoadFile(eventLoad) {
    eventLoad.preventDefault();
    const name = `${eventLoad.target.files[0].name.slice(0, 14)}...`;
    const reader = new FileReader();
    const file = eventLoad.target.files[0];
    
    reader.onloadend = () => {
    this.Image = reader.result;
    };
    
    reader.readAsDataURL(file);
    }
}
