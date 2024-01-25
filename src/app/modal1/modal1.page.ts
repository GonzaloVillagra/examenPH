import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.page.html',
  styleUrls: ['./modal1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Modal1Page implements OnInit {
  
  
  constructor(private modalController: ModalController) {}

  confirmarEliminacion(confirmado: boolean) {
    this.modalController.dismiss(confirmado);
  }

  ngOnInit() {
  }

}
