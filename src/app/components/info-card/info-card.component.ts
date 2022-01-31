import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  // @Input() data: string;
  @Input() data: string;
  @Input() title: string;
  @Input() icon: string;
  @Input() loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
