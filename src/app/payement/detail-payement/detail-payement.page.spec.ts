import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailPayementPage } from './detail-payement.page';

describe('DetailPayementPage', () => {
  let component: DetailPayementPage;
  let fixture: ComponentFixture<DetailPayementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPayementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPayementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
