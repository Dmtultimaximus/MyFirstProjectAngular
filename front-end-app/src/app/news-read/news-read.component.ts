import { Component, OnInit } from '@angular/core';
import {Http , Headers} from '@angular/http';
import {Router} from '@angular/router'
import { CompanyService } from '../company.service';
import { AboutService } from '../about.service';
import { AuthService } from '../auth.service';
import { NewsCompanyService } from '../news-company.service';
import { TransferDataService } from '../transfer-data.service';

@Component({
  selector: 'app-news-read',
  templateUrl: './news-read.component.html',
  styleUrls: ['./news-read.component.css']
})
export class NewsReadComponent implements OnInit {
  image: string;
  titleNews: string;
  textNews: string;
  constructor( 
    private transferService: TransferDataService,
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.image = this.transferService.image;
    this.titleNews = this.transferService.titleNews;
    this.textNews = this.transferService.textNews;
  }

}
