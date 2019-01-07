import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  carousel = [
    {href: 'https://picsum.photos/200/300?image=0'},
    {href: 'https://picsum.photos/200/300?image=1'},
    {href: 'https://picsum.photos/200/300?image=2'},
    {href: 'https://picsum.photos/200/300?image=3'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
