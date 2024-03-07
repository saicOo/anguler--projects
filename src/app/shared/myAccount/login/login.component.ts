import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  username= "saico";
  pas = "1234";
send(user,pass){

if(user.value === this.username && pass.value === this.pas){
this.router.navigateByUrl("/Account")
}else{
  alert("Please enter this =>\nE-mail : saico \npassword : 1234");

}
  }
}
