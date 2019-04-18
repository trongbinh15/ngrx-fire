import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// *************************
// Custom Application imports
// *************************

import { AppRoutingModule } from './app-routing.module';
import { AppStateModule, firebaseConfig } from './state/state.module';

import { AppComponent } from './views/app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostsFacade, postReducer } from './state/posts';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStateModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    EffectsModule.forRoot([PostsFacade]),
    StoreModule.forRoot({
      post: postReducer
    }),
    StoreDevtoolsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
