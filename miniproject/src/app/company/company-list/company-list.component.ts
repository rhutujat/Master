import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(private cs :CommonService , private location :Location) { }

  ngOnInit(): void 
  {
    this.getCompanies()
  }

  comp :Company[]

  getCompanies()
  {
    this.cs.getallcomp().subscribe(data => this.comp =data)
  }

  goBack()
  {
    this.location.back()
  }

  deleteComp(comp:Company)
  {
    this.cs.deleteComp(comp).subscribe()
    window.location.reload()
  }
}
