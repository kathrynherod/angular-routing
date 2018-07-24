import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  archives = [
    { year: 2017, month: 'January' },
    { year: 2016, month: 'February' },
    { year: 2015, month: 'March' }
  ];

  constructor() {}

  ngOnInit() {}
}
