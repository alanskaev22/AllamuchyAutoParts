import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-part-card',
  templateUrl: './part-card.component.html',
  styleUrls: ['./part-card.component.css']
})
export class PartCardComponent implements OnInit {
  @Input() partId:any;
  constructor() { }

  ngOnInit(): void {
  }

}
