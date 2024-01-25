import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { PublicacionesListService } from '../servicios/publicaciones-list.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons'; 
import { cameraOutline } from 'ionicons/icons';
import { saveOutline } from 'ionicons/icons';
import { Publicacion } from '../modelo/publicacion';

@Component({
  selector: 'app-gestionpublicacion',
  templateUrl: './gestionpublicacion.page.html',
  styleUrls: ['./gestionpublicacion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GestionpublicacionPage implements OnInit {


    contadorIds: number = 0;
    fechaActual: Date;
    imgData: Photo | null = null;
    listaPublicacion: Publicacion[] = [];
    nuevaPublicacion: Publicacion = {
      id:0,
      titulo: '',
      descripcion: '',
      imagen: "",
    };

  
    constructor(
      private dataservicio: PublicacionesListService,
      private router: Router
    ) {
      this.fechaActual = new Date();
      addIcons({ arrowBackOutline, cameraOutline, saveOutline});
    }
  
    async ngOnInit() {
      await this.dataservicio.getPublicacion();
      await this._actualizar();
    }
  
    async _actualizar() {
      this.listaPublicacion = await this.dataservicio.getPublicacion();
      console.log('Lista actualizada:', this.listaPublicacion);
    }
  


    async agregarPublicacion() {
      this.nuevaPublicacion.id = this.contadorIds++;
      if (this.formularioValido()) {
        await this.dataservicio.guardarPublicacion(this.nuevaPublicacion);
        await this._actualizar();
        this.nuevaPublicacion = {
          id: 0, // No necesitas asignar un ID aquí
          titulo: '',
          descripcion: '',
          imagen: '',
        };
      }
    }
    async tomaImg() {
      this.imgData = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Uri,
        saveToGallery: true,
        correctOrientation: true,
      });
    
      if (this.nuevaPublicacion) {
        this.nuevaPublicacion.imagen =  this.imgData.webPath;
      }
    }

    formularioValido(): boolean {
      return (
        this.nuevaPublicacion.titulo?.length >= 5 &&
        this.nuevaPublicacion.descripcion?.length >= 20
              );
        }

    paginaPrincipal() {
      this.router.navigate(['home']);
    } 
}
    
