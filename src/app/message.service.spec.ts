import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;
  beforeEach(() => { service = new MessageService(); });
 
  it('#Se agrega un nuevo message al array cuando se invoca', () => {
    const messages_length = service.messages.length;
    service.add('fake value');
    expect(service.messages[service.messages.length-1]).toBe('fake value');
    expect(service.messages.length).toBe(messages_length+1);
    service.clear();
  });

  it('#Se borra el contenido del array cuando no contiene mensajes la lista', () => {
    service.clear();
    expect(service.messages.length).toBe(0);
  });

  it('#Se borra el contenido del array cuando contiene varios mensajes', () => {
    service.add('fake value');
    service.add('fake value');
    service.clear();
    expect(service.messages.length).toBe(0);
  });
 
});



