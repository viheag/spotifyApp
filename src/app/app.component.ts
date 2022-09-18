import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spotifyApp';
  stateSideBar: boolean = true;
  stateWidth :string ='230';
  onclickSideBar($event: boolean) {
    this.stateSideBar = $event; 
    this.stateSideBar==true ? this.stateWidth='230' : '115';
  }
}
