import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {
  signupArray : any[] = [];
  signupObj :any = {
   username : '',
   email : '',
   password : ''
  };

  logInObj : any ={
    email : 'sa@gmail.com',
    password : '1234'
  }

  constructor() { }

  ngOnInit(): void {
    const LocalData = localStorage.getItem('signupArray');
    if(LocalData != null){
      this.signupArray = JSON.parse(LocalData);
    }
  }
  onSignUp(){
    this.signupArray.push(this.signupObj);
    localStorage.setItem('signupArray', JSON.stringify(this.signupArray));
    this.signupObj = {
     username : '',
     email : '',
     password : ''
    }
    }
    onLogIn(){
     const userExit = this.signupArray.find(logData => logData.email == this.logInObj.email && logData.password == this.logInObj.password);
     if(userExit != undefined){
      
        Swal.fire({
          title: "Successfully LogIn...!!!",
          icon: "success",
          draggable: true
        });
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          
        });
     }
    }
}
