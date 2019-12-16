import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerificationTitreFoncierPage } from './verification-titre-foncier.page';

describe('VerificationTitreFoncierPage', () => {
  let component: VerificationTitreFoncierPage;
  let fixture: ComponentFixture<VerificationTitreFoncierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationTitreFoncierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificationTitreFoncierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
