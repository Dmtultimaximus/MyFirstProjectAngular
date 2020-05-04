import { Component, OnInit , ViewChild} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages'
import {CompanyService} from '../company.service'
import {Router} from '@angular/router'
import { CheckFormService} from '../check-form.service';
import {AuthService} from '../auth.service';
import { UserCompany} from '../../../../models/UserCompany'
import { UserCompanyBonus} from '../../../../models/UserCompanyBonus'
// import { AgGridModule } from 'ag-grid-angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  nameUser:string;
  emailUser:string;
  loginUser:string;

  nameCompany: string;
  tegsCompany: string;
  aboutCompany: string;
  donateGoal: string;
  parentDonat: string;
  dateEnd: string;
  nameBonus: string;
  priceBonus: string;
  idCompany: string;
  UserScore: Number;

  srcNormal: string;
  srcVideo: string;
  image:any;

  MyCompany: UserCompany;
  BonusCompany: UserCompanyBonus;

  visibility: boolean = true;
  triger: boolean = true;

  constructor(
    private flashMessages: FlashMessagesService,
    private router: Router,
    private companyService: CompanyService,
    private checkForm: CheckFormService,
    private authService: AuthService,  
  ) { 
 
  }
  
  ngOnInit() {
    this.companyService.getUserCompany(JSON.parse(localStorage.getItem('user')).id).subscribe((data:UserCompany) => {
      this.MyCompany = data;
      
    });
    
    this.nameUser = JSON.parse(localStorage.getItem('user')).name;
    this.emailUser = JSON.parse(localStorage.getItem('user')).email;
    this.loginUser = JSON.parse(localStorage.getItem('user')).login;
  }

  //Таблица
  LoadFile(eventLoad) {
    eventLoad.preventDefault();
    const name = `${eventLoad.target.files[0].name.slice(0, 14)}...`;
    const reader = new FileReader();
    const file = eventLoad.target.files[0];
    
    reader.onloadend = () => {
    this.image = reader.result;
    };
    
    reader.readAsDataURL(file);
    }

  visibleCreateCompany(){
    this.triger = !this.triger;
  }
  visibleCompany(){
    this.triger = !this.triger;
  }
  logoutUser(){
    this.authService.logout();
    this.flashMessages.show("Вы вышли в окно",{
      cssClass:'alert-warning',
      timeout: 4000
    });
    this.router.navigate(['auth'])
    return false;
  }

  userBonusClick(){
    const bonusCompany = {
      idUser:JSON.parse(localStorage.getItem('user')).id, 
      nameBonus: this.nameBonus,
      priceBonus: this.priceBonus,
      idCompany: this.idCompany,
    }
    // this.companyService.getIdCompany()
    this.companyService.addBonusCompany(bonusCompany).subscribe(data =>{
      if(!data.success){
        this.flashMessages.show(data.msg, {
          cssClass:'alert-danger',
          timeout: 4000
      });
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessages.show(data.msg, {
          cssClass:'alert-success',
          timeout: 2000
        });
        this.router.navigate(['/']);
      }
    });  
    
  }

  userCompanyClick(){
    let re = 'watch?v=';
    this.srcNormal = this.srcVideo.replace( re , 'embed/') 
    
    const userCompany = {
      idUser: JSON.parse(localStorage.getItem('user')).id,
      nameCompany: this.nameCompany,
      tegsCompany: this.tegsCompany,
      aboutCompany: this.aboutCompany,
      donateGoal: this.donateGoal,
      image: this.image,
      srcVideo: this.srcNormal,
      parentDonat: '0',
      UserScore: 5,
      dateEnd: this.dateEnd,
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

    this.companyService.addUserCompany(userCompany).subscribe(data =>{
      if(!data.success){
        this.flashMessages.show(data.msg, {
          cssClass:'alert-danger',
          timeout: 4000
      });
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessages.show(data.msg, {
          cssClass:'alert-success',
          timeout: 2000
          }
        );
        
        this.idCompany = data.msg;
        this.router.navigate(['/dashboard']);
        this.visibility=!this.visibility;
      }
    });  
}

}


