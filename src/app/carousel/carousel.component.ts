import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  @Input() imageList: Array<String> = null;
  @Output() clickImage$ = new EventEmitter();
  constructor() { }

  clickImage(e, item) {
    this.clickImage$.next(item);
  }
  ngOnInit() {
  }

}
