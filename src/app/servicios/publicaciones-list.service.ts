import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Publicacion } from '../modelo/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesListService {


  constructor() { }

  //codigo de servicio para obtener la publicacion
  async getPublicacion(): Promise<Publicacion[]> {
    let publicacion: string | null = (await Preferences.get({ key: 'publicaciones' })).value;
    return JSON.parse(publicacion ?? '[]');
  }

  async eliminarPublicacion(id: number): Promise<void> {
    if (typeof id !== 'number') {
      console.error('ID no válido:', id);
      return;
    }
  
    let publicaciones = await this.getPublicacion();
    console.log('Publicaciones antes de eliminar:', publicaciones);
    publicaciones = publicaciones.filter(pub => pub.id !== id);
    console.log('Publicaciones después de eliminar:', publicaciones);
    await this.guardarPublicaciones(publicaciones);
  }
  

  async guardarPublicacion(publicacion: Publicacion) {
    publicacion.fechaCreacion = new Date();
    let publicaciones = await this.getPublicacion();
    publicaciones.push(publicacion);
    this.guardarPublicaciones(publicaciones);
  }

  private async guardarPublicaciones(publicaciones: Publicacion[]) {
    await Preferences.set({ key: 'publicaciones', value: JSON.stringify(publicaciones) });
  }
  
}
