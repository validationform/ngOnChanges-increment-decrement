import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() public parentData: number;
  constructor() {}

  ngOnInit() {}

  changeFromChild() {
    this.parentData = this.parentData - 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('updated values=>', changes);
  }
}
