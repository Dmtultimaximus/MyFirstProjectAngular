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
  selector: 'app-new-bonus',
  templateUrl: './new-bonus.component.html',
  styleUrls: ['./new-bonus.component.css']
})
export class NewBonusComponent implements OnInit {
  nameBonus: string;
  priceBonus: string;

  constructor(
    private flashMessages: FlashMessagesService,
    private router: Router,
    private checkForm: CheckFormService,
    private companyService: CompanyService, 
  ) { }

  ngOnInit() {
  }

  addCompanyBonus(){
    const newBonusCompany = {
      idUser: JSON.parse(localStorage.getItem('user')).id,
      idCompany: localStorage.getItem('company'),
      nameBonus: this.nameBonus,
      priceBonus: this.priceBonus,
    };
    
  
   
    if(!this.checkForm.checkNameCompany(newBonusCompany.nameBonus)) {
      this.flashMessages.show("Введите заголовок новости",{
        cssClass:'alert-danger',
        timeout: 4000
      });
      return false;
    } else if(!this.checkForm.checkTagsCompany(newBonusCompany.priceBonus)) {
      this.flashMessages.show("Введите текст новости",{
        cssClass:'alert-danger',
        timeout: 4000
      });
        return false;
    } 
    this.companyService.addBonusCompany(newBonusCompany).subscribe(data =>{
      if(!data.success){
        this.flashMessages.show(data.msg, {
          cssClass:'alert-danger',
          timeout: 4000
      });
        // this.router.navigate(['/about']);
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
}
