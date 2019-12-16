import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewPayementPage } from './new-payement.page';

describe('NewPayementPage', () => {
  let component: NewPayementPage;
  let fixture: ComponentFixture<NewPayementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPayementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPayementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
