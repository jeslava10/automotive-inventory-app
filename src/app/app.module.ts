import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListMerchandiseComponent } from './components/list-merchandise/list-merchandise.component';
import { EditMerchandiseComponent } from './components/edit-merchandise/edit-merchandise.component';
import { AddMerchandiseComponent } from './components/add-merchandise/add-merchandise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListMerchandiseComponent,
    EditMerchandiseComponent,
    AddMerchandiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
