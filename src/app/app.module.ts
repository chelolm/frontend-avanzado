import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './shared/inmemory-db/fake-backend.service';

import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '../environments/environment';

import { UserEffects } from './shared/state/user/effects/user.effects';
import { OfferEffects } from './shared/state/offer/effects/offer.effects';
import { appReducers } from './shared/state/app.reducers';
import { SigninService } from './views/signin/signin.service';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects,OfferEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeBackendService, {
      dataEncapsulation: false
    })
  ],
  declarations: [AppComponent],
  providers: [SigninService],
  bootstrap: [AppComponent]
})
export class AppModule {}
