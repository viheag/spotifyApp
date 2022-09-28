import { Component, OnInit, Input } from '@angular/core'; 
@Component({
  selector: 'app-dashboard-block',
  templateUrl: './dashboard-block.component.html',
  styleUrls: ['./dashboard-block.component.scss']
})
export class DashboardBlockComponent implements OnInit {
  @Input() title = '';
  @Input() img = '';
  @Input() description = '';
  @Input() link = '';
  color:string = 'red';


  constructor() { }

  ngOnInit(): void {
  }

}
