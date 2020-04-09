import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompletudePage } from './completude.page';

describe('CompletudePage', () => {
  let component: CompletudePage;
  let fixture: ComponentFixture<CompletudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletudePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
