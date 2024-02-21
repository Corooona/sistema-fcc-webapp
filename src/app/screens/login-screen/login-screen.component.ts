import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// jquery
declare var $:any;

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit{

  public username: string ="";
  public password: string ="";
  public type: String = "password";
  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {

  }

  login(){

  }

  registrar(){
    this.router.navigate(["registro-usuarios"]);
  }

  public showPassword()
  {
    if(this.type == "password"){
      //Muestra la contraseña
      // gato significa que accede al id
      $("#show-password").addClass("show-password");
      $("#show-password").attr("data-password", true);
      this.type = "text";
    }else if(this.type == "text"){
      //Oculta la contraseña
      $("#show-password").removeClass("show-password");
      $("#show-password").attr("data-password", false);
      this.type = "password";
    }
  }
}
