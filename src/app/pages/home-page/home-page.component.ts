import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  employees$: any;

  constructor(
    private service: DataService
  ) {
  }

  ngOnInit(): void {
    this.service.getData().subscribe(r => {
      this.employees$ = r
    })
  }

}
