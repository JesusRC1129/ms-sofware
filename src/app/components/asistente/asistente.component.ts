import { Component, OnInit} from '@angular/core';

import { MenuController, ModalController } from '@ionic/angular';



@Component({
  selector: 'app-asistente',
  templateUrl: './asistente.component.html',
  styleUrls: ['./asistente.component.scss'],
})
export class AsistenteComponent implements OnInit {

  constructor(private menu: MenuController, private modalCtrl: ModalController ) { }

  ngOnInit() {}

  cancel(){
    this.modalCtrl.dismiss()
  }

}
