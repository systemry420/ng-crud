import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  public addEmployee(): void {
    this.db.database.ref('users').set({
      name: 'abc'
    }).then(() => {
      alert('added')
    }).catch((err) => {
      console.log(err);
      
    })
  }

  /**
   * getData
   */
  public getData() {
    this.db.list('users').valueChanges()
      .subscribe(res => {
        console.log(res);
      })
  }
}
