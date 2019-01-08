import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-angular-cli';
  image = "https://icdn.2cda.pl/obr/oryginalne/850ca7d90566b9ed82c60d9d50771230.jpg";
  menu = [
    {name: 'Rocky',
    href: 'http://rocky.com'},
    {name: 'Terminator',
    href: 'http://rocky.com'}
  ]

  carousel = [
    'https://picsum.photos/200/300?image=0',
    'https://picsum.photos/200/300?image=1',
    'https://picsum.photos/200/300?image=2',
    'https://picsum.photos/200/300?image=3'
  ]
  
  onMenuClickItem(...args) {
      console.log(args);
  }
  onClickImage(...args) {
    console.log(args);
}
}
