import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcheterPage } from './acheter.page';

describe('AcheterPage', () => {
  let component: AcheterPage;
  let fixture: ComponentFixture<AcheterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcheterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcheterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
