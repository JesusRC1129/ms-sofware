import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  favoritos(){
    document.getElementById("slider").style.marginLeft = '0%';
  }

  amigos(){
    document.getElementById("slider").style.marginLeft = '-100%';
  }

}
