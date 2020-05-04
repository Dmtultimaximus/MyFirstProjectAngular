import { Component, OnInit } from '@angular/core';
import {TransferDataService} from '../transfer-data.service';
import { CheckFormService} from '../check-form.service';
import { UserCompanyNews} from '../../../../models/UserCompanyNews'
import {FlashMessagesService} from 'angular2-flash-messages'
import {Router} from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-redact-news',
  templateUrl: './redact-news.component.html',
  styleUrls: ['./redact-news.component.css']
})
export class RedactNewsComponent implements OnInit {
  id: string;
  titleNews: string;
  textNews: string;
  newsData: UserCompanyNews;
  image:string
  constructor(
    private transferService: TransferDataService,
    private checkForm: CheckFormService,
    private flashMessages: FlashMessagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id = this.transferService.id;
    this.titleNews = this.transferService.titleNews;
    this.textNews = this.transferService.textNews;
   
  }
  userClick(){
    const redactNews = {
      id: this.id,
      titleNews: this.titleNews,
      textNews: this.textNews,
    }  

    if(!this.checkForm.checkTitleNews(redactNews.titleNews)) {
      this.flashMessages.show("Введите заголовок",{
        cssClass:'alert-danger',
        timeout: 4000
      });
      return false;
    } else if(!this.checkForm.checkTextNews(redactNews.textNews)) {
      this.flashMessages.show("Введите текст",{
        cssClass:'alert-danger',
        timeout: 4000
      });
        return false;
    } 

    this.transferService.dataFromRedact(redactNews).subscribe((data:UserCompanyNews) => {
      this.newsData = data;  
      
      this.router.navigate(['/about']);
    });
    
   
  }
  deleteNews(){
    const idNewsForDelete = {
      id: this.id,
    }  
    this.transferService.dataFromDeleteNews(idNewsForDelete).subscribe(data => {
      this.newsData = data;  
     
      this.router.navigate(['/about']);
    });
  }

}
