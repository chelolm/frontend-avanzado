import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import { MessageService } from './message.service';

import { defer } from 'rxjs';

/** Create async observable that emits-once and completes
 *  after a JS engine turn */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

/** Create async observable error that errors
 *  after a JS engine turn */
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe('HeroesService (with mocks)', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let heroService: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test
      providers: [ HeroService ]
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    heroService = TestBed.get(HeroService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  /// HeroService method tests begin ///
  describe('#getHeroes', () => {
    let expectedHeroes: Hero[];

    beforeEach(() => {
      heroService = TestBed.get(HeroService);
      expectedHeroes = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
       ] as Hero[];
    });

    it('should return expected heroes (called once)', () => {
      heroService.getHeroes().subscribe(
        heroes => expect(heroes).toEqual(expectedHeroes, 'should return expected heroes'),
        fail
      );

      // HeroService should have made one request to GET heroes from expected URL
      const req = httpTestingController.expectOne('api/heroes');
      expect(req.request.method).toEqual('GET');

      // Respond with the mock heroes
      req.flush(expectedHeroes);
    });

    it('should be OK returning no heroes', () => {
      heroService.getHeroes().subscribe(
        heroes => expect(heroes.length).toEqual(0, 'should have empty heroes array'),
        fail
      );

      const req = httpTestingController.expectOne('api/heroes');
      req.flush([]); // Respond with no heroes
    });

    it('should return expected heroes (called multiple times)', () => {
      heroService.getHeroes().subscribe();
      heroService.getHeroes().subscribe();
      heroService.getHeroes().subscribe(
        heroes => expect(heroes).toEqual(expectedHeroes, 'should return expected heroes'),
        fail
      );

      const requests = httpTestingController.match('api/heroes');
      expect(requests.length).toEqual(3, 'calls to getHeroes()');

      // Respond to each request with different mock hero results
      requests[0].flush([]);
      requests[1].flush([{id: 1, name: 'bob'}]);
      requests[2].flush(expectedHeroes);
    }); 
  });
  
  /// HeroService method tests begin ///
  describe('#getHeroNo404', () => {
      let expectedHeroes: Hero[];

      beforeEach(() => {
      heroService = TestBed.get(HeroService);
      expectedHeroes = [
          { id: 1, name: 'A' },
          { id: 2, name: 'B' },
          ] as Hero[];
      });

      it('should return expected heroe (called once)', () => {
        heroService.getHeroNo404(1).subscribe(
            hero => expect(hero).toEqual(expectedHeroes[0], 'should return expected heroe'),
            fail
        );

        // HeroService should have made one request to GET heroes from expected URL
        const req = httpTestingController.expectOne('api/heroes/?id=1');
        expect(req.request.method).toEqual('GET');

        // Respond with the mock heroes
        req.flush(expectedHeroes);
      });

      it('should be OK returning no heroe and return undefined', () => {
        heroService.getHeroNo404(0).subscribe(
            hero => expect(hero).toEqual(undefined, 'should be undefined'),
            fail
        );

        const req = httpTestingController.expectOne('api/heroes/?id=0');
        req.flush([]); // Respond with no heroes
      });
    });

    /// HeroService method tests begin ///
    describe('#getHero', () => {
      let expectedHeroes: Hero[];

      beforeEach(() => {
      heroService = TestBed.get(HeroService);
      expectedHeroes = [
          { id: 1, name: 'A' },
          { id: 2, name: 'B' },
          ] as Hero[];
      });

      it('should return expected heroe (called once)', () => {
        heroService.getHero(1).subscribe(
            hero => expect(hero).toEqual(expectedHeroes[0], 'should return expected heroe'),
            fail
        );

        // HeroService should have made one request to GET heroes from expected URL
        const req = httpTestingController.expectOne('api/heroes/1');
        expect(req.request.method).toEqual('GET');

        // Respond with the mock heroes
        req.flush(expectedHeroes[0]);
      });

      it('should be OK returning no heroe and return empty', () => {
        heroService.getHero(1).subscribe(
            hero => expect(hero).toEqual(<any> '404 Not Found', 'should be 404'),
            fail
        );

        const req = httpTestingController.expectOne('api/heroes/1');
        req.flush('404 Not Found'); // Respond with no heroes
      });
  });

      /// HeroService method tests begin ///
      describe('#addHero', () => {
        let expectedHeroes: Hero[];
  
        beforeEach(() => {
        heroService = TestBed.get(HeroService);
        expectedHeroes = [
            { id: 1, name: 'A' },
            { id: 2, name: 'B' },
            ] as Hero[];
        });
  
        it('should return expected heroe (called once)', () => {
          heroService.addHero(expectedHeroes[0]).subscribe(
              hero => expect(hero.id).toEqual(1, 'should return added id'),
              fail
          );
  
          // HeroService should have made one request to GET heroes from expected URL
          const req = httpTestingController.expectOne('api/heroes');
          expect(req.request.method).toEqual('POST');
  
          // Respond with the mock heroes
          req.flush(expectedHeroes[0]);
        });
  
    });

      /// HeroService method tests begin ///
      describe('#deleteHerO', () => {
        let expectedHeroes: Hero[];
  
        beforeEach(() => {
        heroService = TestBed.get(HeroService);
        expectedHeroes = [
            { id: 1, name: 'A' },
            { id: 2, name: 'B' },
            ] as Hero[];
        });
  
        it('should accept a hero', () => {
          heroService.deleteHero(expectedHeroes[0]).subscribe(
              hero => expect(hero.id).toEqual(1, 'should return deleted id'),
              fail
          );
  
          // HeroService should have made one request to GET heroes from expected URL
          const req = httpTestingController.expectOne('api/heroes/1');
          expect(req.request.method).toEqual('DELETE');
  
          // Respond with the mock heroes
          req.flush(expectedHeroes[0]);
        });

        it('should accept a number', () => {
          heroService.deleteHero(1).subscribe(
              hero => expect(hero.id).toEqual(1, 'should return deleted id'),
              fail
          );
  
          // HeroService should have made one request to GET heroes from expected URL
          const req = httpTestingController.expectOne('api/heroes/1');
          expect(req.request.method).toEqual('DELETE');
  
          // Respond with the mock heroes
          req.flush(expectedHeroes[0]);
        });
  
    });

       /// HeroService method tests begin ///
       describe('#updateHero', () => {
        let expectedHeroes: Hero[];
  
        beforeEach(() => {
        heroService = TestBed.get(HeroService);
        expectedHeroes = [
            { id: 1, name: 'A' },
            { id: 2, name: 'B' },
            ] as Hero[];
        });
  
        it('should return expected heroe (called once)', () => {
          heroService.updateHero(expectedHeroes[0]).subscribe(
              hero => expect(hero.id).toEqual(1, 'should return updated id'),
              fail
          );
  
          // HeroService should have made one request to GET heroes from expected URL
          const req = httpTestingController.expectOne('api/heroes');
          expect(req.request.method).toEqual('PUT');
  
          // Respond with the mock heroes
          req.flush(expectedHeroes[0]);
        });
  
    });

}); 
