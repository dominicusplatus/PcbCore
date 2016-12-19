import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { AppComponent } from './components/app/app.component'
import { GlobalMenuComponent } from './components/globaltoolmenu/globaltoolmenu.component';
import { DesignToolMenuComponent } from './components/designtoolmenu/designtoolmenu.component';
import { DesignViewComponent } from './components/designview/designview.component';

import { Raphael } from 'raphael';

/// <reference path='references.ts'/>

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        GlobalMenuComponent,
        DesignToolMenuComponent,
        DesignViewComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'designview', pathMatch: 'full' },
            { path: 'globaltool-menu', component: GlobalMenuComponent },
            { path: 'designtool-menu', component: DesignToolMenuComponent },
            { path: 'designview', component: DesignViewComponent},
            { path: '**', redirectTo: 'designview' }
        ])
    ]
})
export class AppModule {
}
