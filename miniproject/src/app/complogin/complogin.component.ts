import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-complogin',
  templateUrl: './complogin.component.html',
  styleUrls: ['./complogin.component.css']
})
export class ComploginComponent implements OnInit {

  constructor(private cs :CommonService , private formbuilder : FormBuilder ,private router :Router) { }

  compLoginForm : FormGroup;

  ngOnInit(): void 
  {

    this.compLoginForm = this.formbuilder.group(
      {
        username : ['' , [Validators.required]],
        password : ['' , [Validators.required]]
      }
    )
  }


  compLogin()
  {
    if(this.compLoginForm.valid)
    {
      this.router.navigate(['login/header'])
    }
  }
}
