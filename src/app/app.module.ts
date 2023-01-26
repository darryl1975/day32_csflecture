import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'itemlist', component: ItemListComponent},
      {path: 'employeelist', component: EmployeeListComponent},
    ]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
