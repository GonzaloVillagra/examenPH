import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { GestionpublicacionPage } from './gestionpublicacion.page';

describe('GestionpublicacionPage', () => {
  let component: GestionpublicacionPage;
  let fixture: ComponentFixture<GestionpublicacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionpublicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
