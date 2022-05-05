import { Component, OnInit } from '@angular/core';
import { GetproductsService } from '../getproducts.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  
  prod1:any;

  constructor(private test:GetproductsService){}
  

  ngOnInit() {
    this.prod1=this.test.getFirstProduct();
    console.log(this.prod1.value)
    
  }
   
 

}

