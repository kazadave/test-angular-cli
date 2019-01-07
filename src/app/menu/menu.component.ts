import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  //isMenuShouldBeDisplayed = false;

  @Input() menuList: Array<Object> = null;
  @Output() clickItem$ = new EventEmitter();
  
  onClickHandler(evt, item) {
    this.clickItem$.next(item);
  }
  constructor() { }

  ngOnInit() {
  }

}
