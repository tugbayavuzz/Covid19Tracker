import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SemptompPage } from './semptomp.page';

describe('SemptompPage', () => {
  let component: SemptompPage;
  let fixture: ComponentFixture<SemptompPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemptompPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SemptompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
