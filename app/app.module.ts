import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

import { routing } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        ResumeComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }