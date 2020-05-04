import { Injectable } from '@angular/core';
import {Router, CanActivate} from "@angular/router";
import {AuthService} from './auth.service';

@Injectable()
export class IsMark implements CanActivate {
    constructor( private authService: AuthService,){}
    canActivate(){
        if(this.authService.isLoggedIn()){
            return true;
        }else {
            return false;
        }
    }             
}