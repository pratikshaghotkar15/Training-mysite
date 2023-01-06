import { Component, OnInit } from '@angular/core';
import {Data} from '../data';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
datalist:Data[];

  constructor() { 
  this.datalist=[
  {
  sno:1234,
  name:"pratiksha",
  address:"pune"
  }
  ]
  }

  ngOnInit(): void {
  }
  

}
