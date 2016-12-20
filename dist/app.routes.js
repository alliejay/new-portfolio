"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./about/about.component');
var contact_component_1 = require('./contact/contact.component');
var portfolio_component_1 = require('./portfolio/portfolio.component');
var resume_component_1 = require('./resume/resume.component');
// import { IntroComponent } from './intro/intro.component';
var appRoutes = [
    // {
    //   path: '',
    //     component: IntroComponent,
    //     data: {
    //       title: 'Allie Arsenault | Web Development & Design'
    //     }
    // },
    { path: 'about',
        component: about_component_1.AboutComponent,
        data: {
            title: 'About'
        }
    },
    { path: 'contact',
        component: contact_component_1.ContactComponent,
        data: {
            title: 'Contact'
        }
    },
    { path: 'portfolio',
        component: portfolio_component_1.PortfolioComponent,
        data: {
            title: 'Portfolio'
        }
    },
    { path: 'resume',
        component: resume_component_1.ResumeComponent,
        data: {
            title: 'Resume'
        }
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map