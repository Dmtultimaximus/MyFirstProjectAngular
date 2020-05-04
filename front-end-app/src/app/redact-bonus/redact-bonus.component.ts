import { Component, OnInit } from '@angular/core';
import {TransferDataService} from '../transfer-data.service';
import { CheckFormService} from '../check-form.service';
import { UserCompanyBonus} from '../../../../models/UserCompanyBonus'
import {FlashMessagesService} from 'angular2-flash-messages'
import {Router} from '@angular/router'

@Component({
  selector: 'app-redact-bonus',
  templateUrl: './redact-bonus.component.html',
  styleUrls: ['./redact-bonus.component.css']
})
export class RedactBonusComponent implements OnInit {
  idBonus: string;
  nameBonus: string;
  priceBonus: string;
  bonusData: UserCompanyBonus;
  constructor(
    private transferService: TransferDataService,
    private checkForm: CheckFormService,
    private flashMessages: FlashMessagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.idBonus = this.transferService.idBonus;
    this.nameBonus = this.transferService.nameBonus;
    this.priceBonus = this.transferService.priceBonus;
  }
  userClick(){
    const redactBonus = {
      id: this.idBonus,
      nameBonus: this.nameBonus,
      priceBonus: this.priceBonus,
    }  
    if(!this.checkForm.checkTitleNews(redactBonus.nameBonus)) {
      this.flashMessages.show("Введите заголовок",{
        cssClass:'alert-danger',
        timeout: 4000
      });
      return false;
    } else if(!this.checkForm.checkTextNews(redactBonus.priceBonus)) {
      this.flashMessages.show("Введите текст",{
        cssClass:'alert-danger',
        timeout: 4000
      });
        return false;
    } 
    this.transferService.dataFromRedactBonus(redactBonus).subscribe((data:UserCompanyBonus) => {
      this.bonusData = data;  
      
      this.router.navigate(['/about']);
    });
    
   
  }
  deleteBonus(){
    const idBonusForDelete = {
      id: this.idBonus,
    }  
    this.transferService.dataFromDeleteBonus(idBonusForDelete).subscribe(data => {
      this.bonusData = data;  
      
      this.router.navigate(['/about']);
    });
  }
}
