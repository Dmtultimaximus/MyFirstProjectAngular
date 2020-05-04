import { Component, OnInit } from '@angular/core';
import {Http , Headers} from '@angular/http';
import {Router} from '@angular/router'
import { CompanyService } from '../company.service';
import { AboutService } from '../about.service';
import { UserCompany} from '../../../../models/UserCompany'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  AllCompany: UserCompany;
  
  constructor(
    private router: Router,
    private companyService: CompanyService,
    private http: Http ,
    private aboutService: AboutService,
  ) {}

  ngOnInit() {
    this.companyService.getAllUserCompany().subscribe((data:UserCompany) => {
      this.AllCompany = data['company'];
      
    });
 
  }
  aboutCompany(idCompany){
    localStorage.setItem('company' , idCompany);

  
  }
}
