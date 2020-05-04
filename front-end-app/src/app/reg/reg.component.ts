import { Component, OnInit } from '@angular/core';
import { CheckFormService} from '../check-form.service';
import {FlashMessagesService} from 'angular2-flash-messages'
import { AuthService} from '../auth.service'
import {Router} from '@angular/router'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  name: String;
  login: String;
  email: String;
  password: String;
  loginEmployed: boolean;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor( private checkForm: CheckFormService,
               private flashMessages: FlashMessagesService,
               private router: Router,
               private authService: AuthService
    ) { }

  ngOnInit() {
  }

  async userRegisterClick(){
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password
      
    };

    if(!this.checkForm.checkName(user.name)) {
      this.flashMessages.show("Введите имя",{
        cssClass:'alert-danger',
        timeout: 4000
      });
      return false;
    } else if(!this.checkForm.checkLogin(user.login)) {
      this.flashMessages.show("Введите логин",{
        cssClass:'alert-danger',
        timeout: 4000
      });
    } else if(!this.checkForm.checkEmail(user.email)) {
      this.flashMessages.show("Введите емаил",{
        cssClass:'alert-danger',
        timeout: 4000
      });
      return false;
    } else if(!this.checkForm.checkPassword(user.password)) {
      this.flashMessages.show("Введите пароль",{
        cssClass:'alert-danger',
        timeout: 4000
      }); 
      return false;
    } 


 

    this.authService.reqisterUser(user).subscribe(data =>{
        if(!data.success){
          this.flashMessages.show(data.msg, {
            cssClass:'alert-danger',
            timeout: 4000
        });
        // this.router.navigate(['/reg']);
      } else {
        this.flashMessages.show(data.msg, {
          cssClass:'alert-success',
          timeout: 2000
        });
        this.router.navigate(['/auth']);
      }
    });
  }
}
