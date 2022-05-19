import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  constructor(
    private service: DataService
  ) { }

  ngOnInit(): void {
    this.service.getData()
  }

  addEmployee() {
    this.service.addEmployee()
  }

}
