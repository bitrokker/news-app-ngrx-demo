import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, from, map, mergeMap, Observable, of } from 'rxjs';
import { loadNewsbyPageAction, setNewsAction } from '../actions/news.actions';
import { INews } from '../interfaces/news.interface';
import { NewsDataService } from '../services/news-data.service';



@Injectable()
export class NewsDataEffects {

    constructor(
        private _actions$: Actions,
        private _newsDataService: NewsDataService
    ) {}

    /**
     * Observable wird ausgefüht wenn Action "loadNewsbyPageAction" getriggert wird.
     */
    public newsData$: Observable<Action> = createEffect(() =>
        this._actions$.pipe(
            ofType(loadNewsbyPageAction),
            mergeMap((action) =>
                this._newsDataService.getNewsByPage$(action.page).pipe(
                    map((data: Array<INews>) => {
                        return setNewsAction({ payload: data });
                    }), catchError((err: HttpErrorResponse) => {
                        console.warn("You need a valid API-KEY from: https://site.financialmodelingprep.com/developer/docs/");                        
                        return from([]);
                    })
                )
            )
        )
    );     
}
