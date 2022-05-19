import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  employee = new Employee('', '', '')

  constructor(
    private service: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addEmployee() {
    this.service.addEmployee(this.employee)
    this.employee  = new Employee('', '', '') 
  }

}
