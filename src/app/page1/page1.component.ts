import { Component, OnInit } from '@angular/core';
import {GetproductsService} from '../getproducts.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
prod1:any;

  constructor(private test:GetproductsService){}
  

  ngOnInit() {
    this.prod1=this.test.getFirstProduct();
    console.log(this.prod1.value)
    
  }

}
