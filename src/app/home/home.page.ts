import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addCircle } from 'ionicons/icons';
import { trashOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { PublicacionesListService } from '../servicios/publicaciones-list.service';
import { Publicacion } from '../modelo/publicacion';
import { ModalController } from '@ionic/angular/standalone';
import { Modal1Page } from '../modal1/modal1.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class HomePage implements OnInit{
  
  publicaciones: Publicacion[] = [];

  constructor(
    private dataservicio: PublicacionesListService,
    private modalController: ModalController,
    private router: Router
    ) 
  {
    addIcons({addCircle, trashOutline})
  }

  async ngOnInit() {
    await this.dataservicio.getPublicacion();
    await this._actualizar();
  }

  async _actualizar() {
    this.publicaciones = await this.dataservicio.getPublicacion();
  }
  async eliminarPublicacion(id: number): Promise<void> {
    if (id !== undefined) {
      const modal = await this.modalController.create({
        component: Modal1Page,
      });
  
      modal.onDidDismiss().then((result) => {
        if (result.data === true) {
          console.log('ID a eliminar:', id);
          this.dataservicio.eliminarPublicacion(id);
          this._actualizar();
        } else {
          console.log('Eliminación cancelada.');
        }
      });
  
      return await modal.present();
    } else {
      console.error('ID no definido. No se puede eliminar.');
    }
  }

  agregarPublicacion() {
    this.router.navigate(['gestionpublicacion']);
  }

}
  
  

  
  
