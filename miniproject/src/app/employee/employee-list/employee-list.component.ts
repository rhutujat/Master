import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private cs : CommonService , private location : Location) { }

  emp :Employee[]
  ngOnInit(): void {

    this.cs.getAllData().subscribe(data => this.emp =data)

  }

  goBack()
  {
    this.location.back()
  }

  deletedata(emp:Employee)
  {
    this.cs.deleteData(emp).subscribe()
    window.location.reload()
    alert("Record deleted")

  }
}
