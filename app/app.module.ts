import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// In memory web API
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

import { PortfolioService } from './portfolio/portfolio.service';

import { routing } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        ResumeComponent
    ],
    providers: [
        PortfolioService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }