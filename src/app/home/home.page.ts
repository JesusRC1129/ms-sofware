import { Component } from '@angular/core';

import { MenuController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
import { AsistenteComponent } from '../components/asistente/asistente.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    // slidesPerView: 3,
    // spaceBetween: 50,
    initialSlide: 0,
    speed: 400,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  };

  constructor(private menu: MenuController, private modalCtrl: ModalController) {}

  openEnd() {
    this.menu.open('end');
  }

  async openAsistente() {
    const modal = await this.modalCtrl.create({
      component: AsistenteComponent,
      cssClass: 'css-asistente'
    });
    modal.present();
  }

}
