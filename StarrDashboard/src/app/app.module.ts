
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    ToolbarModule,
    DashboardModule,
    FontAwesomeModule,
    AppRoutingModule    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }