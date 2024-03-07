import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from "@angular/forms";
import { LoginService } from '../../service/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginResponse } from '../../context/DTOs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fd:FormBuilder,
    private service:LoginService ,
    private toastr:ToastrService,
    private router:Router,
    private spinner: NgxSpinnerService) { }
  loginForm!:FormGroup

  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.loginForm = this.fd.group({
      email:['',[Validators.required , Validators.email]],
      password:['',[Validators.required , Validators.maxLength(20) , Validators.minLength(3) ]],
      role:['admin']
    })
  }

  login(){
    this.service.login(this.loginForm.value).subscribe((res:any)=>{
      console.log(res)
      localStorage.setItem("token",res.token)
      this.toastr.success('success', 'Login Success');
      this.router.navigate(['/tasks'])
    });
  }
}
