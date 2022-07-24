import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'changes';
  data = 0;
  constructor() {}

  ngOnInit() {}

  changeFromParent() {
    this.data = this.data + 1;
  }
}
