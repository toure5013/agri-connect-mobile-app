import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemanderPermisPage } from './demander-permis.page';

describe('DemanderPermisPage', () => {
  let component: DemanderPermisPage;
  let fixture: ComponentFixture<DemanderPermisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemanderPermisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemanderPermisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
