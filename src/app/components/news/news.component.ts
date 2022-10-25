import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs';
import { loadNewsbyPageAction } from '../../actions/news.actions';
import { INews, INewsState } from '../../interfaces/news.interface';
import { selectNews } from '../../selectors/news.selectors';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

    public data: Array<INews> = new Array<INews>();    
    public displayedColumns: string[] = ['publishedDate', 'title', 'url'];  

    constructor(
        private _store: Store<INewsState>
    ) { }

    ngOnInit(): void { 
        this._store.dispatch(loadNewsbyPageAction({ page: 0 }));
        this._store.pipe(select(selectNews)).pipe(map(x => x.content)).subscribe(x => this.data = x);
    }

    /**
     * Event wird beim paging ausgelöst.
     * @param event 
     */
    public onPageClick(event: PageEvent): void {
        this._store.dispatch(loadNewsbyPageAction({ page: event.pageIndex }));         
    }
}
