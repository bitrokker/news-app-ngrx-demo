import { Injectable } from '@angular/core';
import { merge, Observable, reduce } from 'rxjs';
import { INews } from '../interfaces/news.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {
    private _stockNewsUrl = "https://financialmodelingprep.com/api/v4/general_news";
    private _cryptonewsUrl = "https://financialmodelingprep.com/api/v4/crypto_news"; 

    constructor(private _httpClient: HttpClient) { }

    /**
     * oberservable liefert die News von der rest-api für stock und crypto per page zurück.
     * @param page 
     * @returns 
     */
    public getNewsByPage$(page: number): Observable<Array<INews>> {
        const url1 = `${this._stockNewsUrl}?page=${page}`;
        const url2 = `${this._cryptonewsUrl}?page=${page}`;

        const http1 = this._httpClient.get<Array<INews>>(url1);
        const http2 = this._httpClient.get<Array<INews>>(url2);

        const httpMerge = merge(http1, http2).pipe(
            reduce((a, b) => a.concat(b))
        )   
        
        return httpMerge;
    }    
}
