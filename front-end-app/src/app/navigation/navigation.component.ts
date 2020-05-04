import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages'
import {CompanyService} from '../company.service'
import {Router} from '@angular/router'
import { CheckFormService} from '../check-form.service';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService,
              private flashMessages: FlashMessagesService,
              private router: Router,
    ) { }

  ngOnInit() {
  }
  logoutUser(){
    this.authService.logout();
    this.flashMessages.show("Вы вышли",{
      cssClass:'alert-warning',
      timeout: 4000
    });
    this.router.navigate(['auth'])
    return false;
  }
}
