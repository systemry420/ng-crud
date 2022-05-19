import { DataService } from './services/data.service';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'edit', component: EditPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA0izDkdEjU8xqXZwJQad5MHtZzCzyAgcU",
      authDomain: "drr305-82150.firebaseapp.com",
      databaseURL: "https://drr305-82150-default-rtdb.firebaseio.com",
      projectId: "drr305-82150",
      storageBucket: "drr305-82150.appspot.com",
      messagingSenderId: "651838188823",
      appId: "1:651838188823:web:237dfb6e83a9c76853db52",
      measurementId: "G-HGDQYWY113"
    }),
    AngularFireDatabaseModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
