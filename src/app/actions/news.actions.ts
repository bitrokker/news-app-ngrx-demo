import { createAction, props } from '@ngrx/store';
import { INews } from '../interfaces/news.interface';


export const loadNewsbyPageAction = createAction(
    '[News] Load News',
    props<{ page: number }>()
);

export const setNewsAction = createAction(
    '[News] Set News',
    props<{ payload: INews[] }>()
);