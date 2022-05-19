import { Observable } from 'rxjs';
import { Employee } from './../models/Employee';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  public addEmployee(data: Employee): void {
    const id = this.db.createPushId()
    this.db.list('users').push({
      id,
      name: data.name,
      company: data.company,
      role: data.role,
    })
  }

  /**
   * getData
   */
  public getData(): Observable<any[]> {
    return this.db.list('users').valueChanges()
  }
}
