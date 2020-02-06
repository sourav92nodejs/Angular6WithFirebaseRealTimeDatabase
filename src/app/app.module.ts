import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'; 

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonService } from './shared/person.service';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule

  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
