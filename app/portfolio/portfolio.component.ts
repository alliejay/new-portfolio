import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PortfolioItem } from './portfolioItem';
import { PortfolioService } from './portfolio.service';

@Component({
    selector: 'portfolio',
    templateUrl: 'app/portfolio/portfolio.component.html',
    styleUrls: ['app/portfolio/style.css']
})

export class PortfolioComponent {
    portfolioItems: PortfolioItem[];

    constructor(
        private router: Router,
        private portfolioService: PortfolioService) { }

    getItems(): void {
        this.portfolioService.getItems().then(portfolioItems => this.portfolioItems = portfolioItems);
    }

    ngOnInit(): void {
        this.getItems();
    }

}