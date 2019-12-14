import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LouerPage } from './louer.page';

describe('LouerPage', () => {
  let component: LouerPage;
  let fixture: ComponentFixture<LouerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LouerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LouerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
