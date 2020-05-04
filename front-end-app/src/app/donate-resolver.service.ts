import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {DataDonateService, donate } from './data-donate.service';
import {Observable} from  'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DonateResolverService implements Resolve<object> {
  

  constructor(private dataService:DataDonateService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     Observable<donate[]> | Promise<donate[]> | donate[] {
       const dataDonate : donate[] =[
        {
          idCompany: '123',
          nameBonus: '123',
          priceBonus: '123',
        }
       ];
      //  const observable:Observable<donate[]> = Observable.create(observer => {
      //    observer.next(dataDonate);
      //    observer.complete();
      //  })
      //  const promise: Promise<donate[]> = new Promise((resolve, reject) =>{
      //    resolve(dataDonate)
      //  })
       return dataDonate
     }
}
