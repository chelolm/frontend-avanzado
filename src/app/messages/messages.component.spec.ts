import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';

import { MessageService } from '../message.service';

class MockMessageService {
  messages: string[] = ['1','2','3'];

  clear() {
    this.messages = [];
  }
};

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  let messageService: MessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesComponent ],
      providers: [{ provide: MessageService, useClass: MockMessageService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    messageService = fixture.debugElement.injector.get(MessageService);
    //messageService = TestBed.get(MessageService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Messages" as h2', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('Messages');
  });

  it('should call clear function when button is clicked', async(() => {
    spyOn(messageService, 'clear');
    
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(messageService.clear).toHaveBeenCalled();
    });
  }));

});
