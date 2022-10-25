import { createReducer, on } from '@ngrx/store';
import { setNewsAction } from '../actions/news.actions';
import { INews, INewsState } from '../interfaces/news.interface';


export const newsFeatureKey = 'news';

export const initialState: INewsState = {
    content: Array<INews>()
};

export const newsReducer = createReducer(
    initialState,
    on(
        setNewsAction,
        (state: INewsState, { payload }) => {
            return { ...state, content: payload }
        }
    )
);
