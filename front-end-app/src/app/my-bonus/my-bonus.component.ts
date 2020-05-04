import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {CompanyService} from '../company.service'
import { UserCompanyBonus} from '../../../../models/UserCompanyBonus'


export interface UserData {
  id: string;
  nameBonus: string;
  priceBonus: string;
}

@Component({
  selector: 'app-my-bonus',
  templateUrl: './my-bonus.component.html',
  styleUrls: ['./my-bonus.component.css']
})



export class MyBonusComponent implements OnInit {

  MyBonus: UserCompanyBonus

  displayedColumns: string[] = ['id', 'nameBonus','priceBonus'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.companyService.getUserBonus(JSON.parse(localStorage.getItem('user')).id).subscribe(data => {
      this.MyBonus = data;
     
      const users = this.MyBonus
      
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
