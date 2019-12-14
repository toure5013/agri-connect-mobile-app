import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListePayementPage } from './liste-payement.page';

describe('ListePayementPage', () => {
  let component: ListePayementPage;
  let fixture: ComponentFixture<ListePayementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePayementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListePayementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
