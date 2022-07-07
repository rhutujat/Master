import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from '../model/company';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private cs: CommonService, private router: Router) { }

  registrationForm: FormGroup

  ngOnInit(): void {

    this.registrationForm = this.formbuilder.group(
      {
        id: [],
        ename: [''],
        email: [''],
        mobile: [''],
        designation: [''],
        username: [''],
        password: [''],
      }
    )

  }

  registerEmp() 
  {
    if (this.registrationForm.valid)
     {
      console.log("in register()")
      this.cs.saveEmp(this.registrationForm.value).subscribe()
      console.log(this.registrationForm.value)
      window.location.reload
      alert("REGISTRATION SUCCESSFUL")
      this.router.navigate(['login'])
    }

  }

}
