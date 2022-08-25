import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

//TODO: componente para el login con google
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  onclick(){
    this.authService.loginWithGoogle()
    .then(resp =>{
      console.log(resp)
      this.router.navigate(['home'])
    }).catch(err=>console.log(err))
   }
}
