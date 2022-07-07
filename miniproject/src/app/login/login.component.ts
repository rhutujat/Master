import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router :Router , private formbuilder : FormBuilder , private cs :CommonService) { }

  loginForm : FormGroup

  ngOnInit(): void
  {
    this.loginForm = this.formbuilder.group(
      {
        username : ['', [Validators.required]],
        password : ['',[Validators.required]]
      }
    )
  }

  emp :Employee[]

empLogin()
{

    this.cs.getAllData().subscribe(data => this.emp = data)

  // for(let i=0 ; i<this.emp.length;i++)
  // {
  //   console.log()
    
  // }


  if(this.loginForm.valid)
  {
    this.router.navigate(['login/header'])
  }
}

}
