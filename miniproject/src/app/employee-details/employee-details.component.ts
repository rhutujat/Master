import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private cs: CommonService, private route: ActivatedRoute, private location: Location) { }

  employeeObj: Employee

  ngOnInit(): void {

   // this.get1EmployeeSnap()
    this.get1EmployeeObservable()

  }

  get1EmployeeSnap() {
    let empid = parseInt(this.route.snapshot.paramMap.get('id'))
    this.cs.get1Employee(empid).subscribe(data => this.employeeObj = data)

  }

  get1EmployeeObservable() {

    this.route.paramMap.subscribe(param1 =>
      {
        this.cs.get1Employee(parseInt(param1.get('id'))).subscribe(data => this.employeeObj =data)
      }
    )
  }

  getback() {
    this.location.back()

  }

}
