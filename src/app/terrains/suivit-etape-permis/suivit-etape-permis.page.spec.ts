import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuivitEtapePermisPage } from './suivit-etape-permis.page';

describe('SuivitEtapePermisPage', () => {
  let component: SuivitEtapePermisPage;
  let fixture: ComponentFixture<SuivitEtapePermisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuivitEtapePermisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuivitEtapePermisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
