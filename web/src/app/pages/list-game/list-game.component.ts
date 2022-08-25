import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//TODO: componente para el listado de mis juegos
@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.scss']
})
export class ListGameComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onclickCreate(){
    this.router.navigate(['newgame']);
  }

  onclickInvite(){
    console.log("INVITACION");
  }

  onclickList(){
    this.router.navigate(['gamelist']);
  }

}
