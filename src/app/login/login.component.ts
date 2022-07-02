import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mesClass = '';
  message = '';
  custId: any;
  resData: any;

  constructor( private service: AuthService , private router: Router) {
    localStorage.clear();
  }
  Login = new FormGroup({
    username: new FormControl("" , Validators.required),
    password: new FormControl("" , Validators.required)
  });
  ngOnInit(): void {
  }

  login(){
    if(this.Login.valid){
      this.service.login(this.Login.value).subscribe(result=>{
        if(result != null){
          this.resData = result;
          console.log(this.resData.data.token)
          localStorage.setItem('token', this.resData.data.token);
          this.router.navigate(['']);
        }
      });
    }
  }
}
