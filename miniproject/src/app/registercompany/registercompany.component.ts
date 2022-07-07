import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-registercompany',
  templateUrl: './registercompany.component.html',
  styleUrls: ['./registercompany.component.css']
})
export class RegistercompanyComponent implements OnInit {

  constructor(private cs: CommonService, private formbuilder: FormBuilder, private location: Location , private route :Router) { }

  registerCompanyForm: FormGroup

  ngOnInit(): void {

    this.registerCompanyForm = this.formbuilder.group(
      {
        id: [],
        cname: [''],
        caddr: [''],
        cemail: [''],
        cphn: [''],
        username : [''],
        password : ['']

      }
    )
  }


  registerComp() {

    this.cs.registerComp(this.registerCompanyForm.value).subscribe()
    alert("Company Registration successful")
    this.route.navigate(['complogin'])
  }

}
