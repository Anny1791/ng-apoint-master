import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSelectModule, NbSidebarModule, NbThemeModule, NbToastrModule, NbToggleModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResigterEventCategoryComponent } from './components/resigter-event-category/resigter-event-category.component';
import { EventCategoryComponent } from './components/event-category/event-category.component';
import { DialogDelComponent } from './components/dialog-del/dialog-del.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [
    AppComponent,
    ResigterEventCategoryComponent,
    EventCategoryComponent,
    DialogDelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    RouterModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule,
    NbSelectModule,
    NbToggleModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbMenuModule,
    NbActionsModule,
    NbCheckboxModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
