import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerrainsPage } from './terrains.page';

describe('TerrainsPage', () => {
  let component: TerrainsPage;
  let fixture: ComponentFixture<TerrainsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerrainsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
