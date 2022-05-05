import { Component, OnInit } from '@angular/core';
import {GetproductsService} from './getproducts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetproductsService]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
  

 
  

 
}
