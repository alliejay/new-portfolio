import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { IntroComponent } from './intro/intro.component';

const appRoutes: Routes = [
    {
      path: '',
        component: IntroComponent,
        data: {
          title: 'Allie Arsenault | Web Development & Design'
        }
    },
    { path: 'about',
        component: AboutComponent,
        data: {
            title: 'About'
        }
    },
    { path: 'contact',
        component: ContactComponent,
        data: {
            title: 'Contact'
        }
    },
    { path: 'portfolio',
        component: PortfolioComponent,
        data: {
            title: 'Portfolio'
        }
    },
    { path: 'resume',
        component: ResumeComponent,
        data: {
            title: 'Resume'
        }
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);