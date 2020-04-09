import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoParametrePage } from './info-parametre.page';

describe('InfoParametrePage', () => {
  let component: InfoParametrePage;
  let fixture: ComponentFixture<InfoParametrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoParametrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoParametrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
