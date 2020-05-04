import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {CompanyService} from '../company.service'
import { UserCompany} from '../../../../models/UserCompany'
import { TransferDataService } from '../transfer-data.service';
import { CheckFormService} from '../check-form.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-redact',
  templateUrl: './company-redact.component.html',
  styleUrls: ['./company-redact.component.css']
})
export class CompanyRedactComponent implements OnInit {
  idCompany: string;
  nameCompany: string;
  tegsCompany: string;
  aboutCompany: string;
  donateGoal: string;
  dateEnd: string;
  srcVideo: string;
  srcNormal: string;
  proverka: UserCompany;
  // MyCompany: UserCompany;
  constructor(
    private companyService: CompanyService,
    private transferDataService: TransferDataService,
    private flashMessages: FlashMessagesService,
    private checkForm: CheckFormService,
    private authService: AuthService, 
    private router: Router,
  ) { }

  ngOnInit() {
    this.idCompany = this.transferDataService.idCompany
    this.nameCompany =this.transferDataService.nameCompany;
    this.tegsCompany = this.transferDataService.tegsCompany;
    this.aboutCompany = this.transferDataService.aboutCompany;
    this.donateGoal = this.transferDataService.donateGoal;
    this.dateEnd = this.transferDataService.dateEnd;
    this.srcVideo = this.transferDataService.srcVideo;
   
  }
  userCompanyDelete(){
    this.transferDataService.dataFromDeleteCompany(this.idCompany).subscribe(data =>{
      this.proverka = data
      this.router.navigate(['dashboard'])
    
    }); 
  }
  userCompanyRedactClick(){
    let re = 'watch?v=';
    this.srcNormal = this.srcVideo.replace( re , 'embed/') 
    const userCompany = {
      idCompany: this.idCompany,
      nameCompany: this.nameCompany,
      tegsCompany: this.tegsCompany,
      aboutCompany: this.aboutCompany,
      donateGoal: this.donateGoal,
      dateEnd: this.dateEnd,
      srcVideo: this.srcNormal,
    };

  

    if(!this.checkForm.checkNameCompany(userCompany.nameCompany)) {
      this.flashMessages.show("Введите имя компании",{
        cssClass:'alert-danger',
        timeout: 4000
      });
      return false;
    } else if(!this.checkForm.checkTagsCompany(userCompany.tegsCompany)) {
      this.flashMessages.show("Введите теги",{
        cssClass:'alert-danger',
        timeout: 4000
      });
        return false;
    } else if(!this.checkForm.checkAboutCompany(userCompany.aboutCompany)) {
      this.flashMessages.show("Введите описание компании",{
        cssClass:'alert-danger',
        timeout: 4000
      });
      return false;
    } 

    this.transferDataService.dataFromRedactCompany(userCompany).subscribe(data =>{
      this.proverka = data
      this.router.navigate(['dashboard'])
     
    });  
}
}
