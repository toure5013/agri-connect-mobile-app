import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EtatPermisPage } from './etat-permis.page';

describe('EtatPermisPage', () => {
  let component: EtatPermisPage;
  let fixture: ComponentFixture<EtatPermisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatPermisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EtatPermisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
