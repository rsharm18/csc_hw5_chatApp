import { Component, OnInit } from '@angular/core';
import { UserAuthServiceService } from '../services/user-auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;
  inValidLogin:boolean;

  constructor(private authService:UserAuthServiceService, private route:Router)
  {
   this.inValidLogin=true
  }
   checkLog()
   {
    this.inValidLogin=false;

     console.log(`You entered ${this.email} ${this.password}`);
     this.inValidLogin = this.authService.getUser(this.email,this.password);
     console.log(`invalid login ${this.inValidLogin}`)
     return false;
     
   }

  ngOnInit() {
  }

}
