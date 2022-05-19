import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,

    provideFirebaseApp(() => initializeApp({ 
      apiKey: "AIzaSyA0izDkdEjU8xqXZwJQad5MHtZzCzyAgcU",
      authDomain: "drr305-82150.firebaseapp.com",
      databaseURL: "https://drr305-82150-default-rtdb.firebaseio.com",
      projectId: "drr305-82150",
      storageBucket: "drr305-82150.appspot.com",
      messagingSenderId: "651838188823",
      appId: "1:651838188823:web:237dfb6e83a9c76853db52",
      measurementId: "G-HGDQYWY113"
    })),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
