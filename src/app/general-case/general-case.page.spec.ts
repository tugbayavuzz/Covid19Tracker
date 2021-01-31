import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneralCasePage } from './general-case.page';

describe('GeneralCasePage', () => {
  let component: GeneralCasePage;
  let fixture: ComponentFixture<GeneralCasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralCasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
