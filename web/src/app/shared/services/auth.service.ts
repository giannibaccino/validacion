import { Injectable } from '@angular/core';
import { User } from '../model/user';
import {Auth, signInWithPopup, GoogleAuthProvider} from '@angular/fire/auth'

//TODO: servicio para autenticación con google y firebase
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  constructor(private auth:Auth) {
    
    this.user =  {
      uid: "ffff",
      displayName: "Raul Alzate",
      photoURL: "",
      emailVerified: false,
      email: "email@gmail.com"
    };
   }

   loginWithGoogle(){
    return signInWithPopup(this.auth,new GoogleAuthProvider())
   }
}
