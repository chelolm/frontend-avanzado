import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroSearchComponent } from './hero-search.component';


describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearchComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Hero Search" as h4', () => {
    expect(fixture.nativeElement.querySelector('h4').textContent).toEqual('Hero Search');
  });

  it('should call search function when input is changed', async(() => {
    spyOn(component, 'search');
  
    let inputElement = fixture.debugElement.nativeElement.querySelector('input');
    inputElement.value = 'a';
    inputElement.dispatchEvent(new Event('input'));
  
    fixture.whenStable().then(() => {
      expect(component.search).toHaveBeenCalled();
    });
    
  }));

});
