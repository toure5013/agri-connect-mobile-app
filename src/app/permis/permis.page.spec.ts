import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PermisPage } from './permis.page';

describe('PermisPage', () => {
  let component: PermisPage;
  let fixture: ComponentFixture<PermisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PermisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
