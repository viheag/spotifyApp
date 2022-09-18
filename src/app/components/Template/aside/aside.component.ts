import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  showSideBar :boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  onclickSideBar(){
   this.showSideBar=!this.showSideBar;
   console.log(this.showSideBar)
  }

}
