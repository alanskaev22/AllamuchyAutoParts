import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle = 'Allamuchy Auto Parts';
  currentYear: number = new Date().getFullYear();
  welcome = "Welcome to Allamuchy Auto Parts";
}


