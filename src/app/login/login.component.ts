import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname=""
  pswd=""
  database:any={
    mojombo:{uname:"mojombo",password:"123"},
    defunkt:{uname:"defunkt",password:"1234"}
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  get_uname(event:any){
    console.log(event.target.value);
    this.uname=event.target.value
    

  }
  get_pswd(event:any){

    console.log(event.target.value);
    this.pswd=event.target.value

  }

  login(){
   
    var uname=this.uname
    var pswd=this.pswd
    let db=this.database
    if(uname in db){
      if(pswd==db[uname]["password"]){
        //alert("login success")
        this.router.navigateByUrl("homepage")

      }
      else{
        alert("invalid password")
      }

    }
    else{
      alert("invalid user")

    }
  }

}
