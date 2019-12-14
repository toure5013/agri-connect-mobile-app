import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListerUserTerrainPage } from './lister-user-terrain.page';

describe('ListerUserTerrainPage', () => {
  let component: ListerUserTerrainPage;
  let fixture: ComponentFixture<ListerUserTerrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerUserTerrainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListerUserTerrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
