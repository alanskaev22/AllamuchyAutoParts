import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle = 'Allamuchy Auto Parts';
  currentYear: number = new Date().getFullYear();
  welcome = "Welcome to Allamuchy Auto Parts";
  
  constructor() { }

  ngOnInit(): void {
  }

}
