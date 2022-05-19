import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  employees = [
    { name: 'Sammy', nick_name: 'Shark', company: 'Digital Ocean' },
    { name: 'Sammy', nick_name: 'Shark', company: 'Digital Ocean' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
