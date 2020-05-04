import { Component, OnInit } from '@angular/core';
import {DataDonateService , donate} from '../data-donate.service'
import { ActivatedRoute } from '@angular/router';
import {TransferDataService} from '../transfer-data.service';
import { CheckFormService} from '../check-form.service';
import { UserCompanyNews} from '../../../../models/UserCompanyNews'
import {FlashMessagesService} from 'angular2-flash-messages'
import {Router} from '@angular/router'
import { StripeModule } from "stripe-angular"
import { AboutService } from '../about.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-add-donate',
  templateUrl: './add-donate.component.html',
  styleUrls: ['./add-donate.component.css']
})
export class AddDonateComponent implements OnInit {
  public dataDonate: donate[];
  idCompany: string;
  nameBonus: string;
  priceBonus: string;
  donate:string;
  constructor(private dataDonateService:DataDonateService,
              private activatedRoute: ActivatedRoute,
              private transferService: TransferDataService,
              private checkForm: CheckFormService,
              private flashMessages: FlashMessagesService,
              private router: Router,
              private aboutService: AboutService
              ) { }

  ngOnInit() {
    this.idCompany = this.transferService.idCompany;
    this.nameBonus = this.transferService.nameBonus;
    this.priceBonus = this.transferService.priceBonus;
    
  }
  addDonate(){
    const dataForDonate = {
      idCompany: this.idCompany,
      count: this.priceBonus,
    }
    this.aboutService.addDonate(dataForDonate).subscribe()
    
    const dataForBonus ={
      idUser: JSON.parse(localStorage.getItem('user')).id,
      nameBonus: this.nameBonus,
      priceBonus: this.priceBonus,
    }
    this.aboutService.addBonusForDonate(dataForBonus).subscribe()
    this.router.navigate(['about'])
  }
}
