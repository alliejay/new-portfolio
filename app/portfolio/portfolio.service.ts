import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { PortfolioItem } from './portfolioItem';

@Injectable()
export class PortfolioService {
    private itemsUrl = 'app/portfolioItems';

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http) {
    }

    getItems():Promise<PortfolioItem[]> {
        return this.http.get(this.itemsUrl)
            .toPromise()
            .then(response => response.json().data as PortfolioItem[])
            .catch(this.handleError);
    }

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
}

