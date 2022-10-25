import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { newsFeatureKey, newsReducer } from '../reducers/news.reducer';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(newsFeatureKey, newsReducer)
  ]
})
export class StoreFeaturesModule { }
