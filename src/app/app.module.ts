import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    EmployeeListComponent,
    AnimalFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'itemlist', component: ItemListComponent},
      {path: 'employeelist', component: EmployeeListComponent},
    ]),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
