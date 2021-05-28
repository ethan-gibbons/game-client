import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BraincloudService } from '../core/services';

interface ILogin{
  email:string,
  password:string,
  forceCreate:boolean
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formValue: ILogin

  constructor(
    private brainCloudService : BraincloudService,
    public router : Router
  ) { }

  ngOnInit(): void {
    this.formValue={
      email:"",
      password:"",
      forceCreate: false
    }
    
  }

  async login(){
    const value = this.formValue
    
    const response =  await this.brainCloudService.convertToPromise("authenticateEmailPassword",value.email, value.password,value.forceCreate)
    console.log(response)
    // this.brainCloudService.wrapper.authenticateEmailPassword(value.email, value.password,value.forceCreate, result =>{
    //   console.log(result.status + " : " + JSON.stringify(result, null, 2));
    // })
    
    
    this.router.navigate(["home"])
    
  }
}
