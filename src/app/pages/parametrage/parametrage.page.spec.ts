import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParametragePage } from './parametrage.page';

describe('ParametragePage', () => {
  let component: ParametragePage;
  let fixture: ComponentFixture<ParametragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametragePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParametragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
