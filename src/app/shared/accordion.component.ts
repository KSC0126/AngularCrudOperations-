import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() justViewed: boolean;
  @Input() title: string;
  @Input() isHidden: true;

  constructor() { }

  ngOnInit() {
  }

}
