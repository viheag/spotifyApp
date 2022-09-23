import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  @Output() stateSideBar = new EventEmitter<boolean>();
  showSideBar: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  onclickSideBar() {
    this.showSideBar = !this.showSideBar; 
    this.stateSideBar.emit(this.showSideBar);
  }
}
