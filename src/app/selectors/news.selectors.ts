import { createFeatureSelector, createSelector } from '@ngrx/store';
import { INewsState } from '../interfaces/news.interface';
import { newsFeatureKey } from '../reducers/news.reducer';

export const selectNewsState = createFeatureSelector<INewsState>(newsFeatureKey);
export const selectNews = createSelector(
    selectNewsState,
    (state: INewsState) => { return state; }
)