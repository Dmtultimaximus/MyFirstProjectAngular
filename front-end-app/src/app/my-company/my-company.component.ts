import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {CompanyService} from '../company.service'
import { UserCompany} from '../../../../models/UserCompany'
import { TransferDataService } from '../transfer-data.service';
import {Router} from '@angular/router'

export interface UserData {
  id: string;
  nameCompany: string;
  tegsCompany: string;
  aboutCompany: string;
  progress: string;
  endCompany: string;
}

@Component({
  selector: 'app-my-company',
  templateUrl: './my-company.component.html',
  styleUrls: ['./my-company.component.css']
})
export class MyCompanyComponent implements OnInit {
  idCompany: string;
  nameCompany: string;
  tegsCompany: string;
  aboutCompany: string;
  donateGoal: string;
  dateEnd: string;

  MyCompany: UserCompany;

  displayedColumns: string[] = ['id', 'nameCompany','tegsCompany','aboutCompany',  'parentDonat', 'dateEnd'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private companyService: CompanyService,
    private transferDataService: TransferDataService,
    private router: Router,
  ) { 

        
  }

  ngOnInit() {

    this.companyService.getUserCompany(JSON.parse(localStorage.getItem('user')).id).subscribe((data:UserCompany) => {
      this.MyCompany = data;
      const users = this.MyCompany  
      this.dataSource = new MatTableDataSource(users);
     
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  redactCompany(id, nameCompany, tegsCompany, aboutCompany, donateGoal, dateEnd, srcVideo){
    this.transferDataService.addDataForCompanyRedact(id, nameCompany, tegsCompany, aboutCompany, donateGoal, dateEnd, srcVideo)
    this.router.navigate(['/redactCompany'])

  }

  GotoCompany(idCompany){
    localStorage.setItem('company' , idCompany);
    // this.idCompany =idCompany;
    // this.aboutService.idCompany(idCompany)
    this.router.navigate(['about'])
  
  }
}

