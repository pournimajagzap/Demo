import { Component, OnInit } from '@angular/core';
import {products}  from 'src/app/data';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  dataTable:any[]=[]

  flag="I not in anything"
  ngOnInit(): void {
    this.flag="I im in OnIniint cycle"
    console.log(this.flag)
  }
    
    ngOnDestroy(){
      this.flag="I m in destroy cycle"
      console.log(this.flag)
  }
}
