import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/modules/material.module';
import { NewsComponent } from './components/news/news.component';
import { StoreFeaturesModule } from './modules/store-features.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { NewsDataEffects } from './effects/news-data.effects';
import { FmpApiKeyInterceptor } from './interceptors/fmp-api-key.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],    
    MaterialModule,
    StoreFeaturesModule,
    HttpClientModule,
    EffectsModule.forRoot([NewsDataEffects])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FmpApiKeyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
