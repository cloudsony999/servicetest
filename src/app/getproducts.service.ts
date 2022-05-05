import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetproductsService {
  products: any;
  prod1:any;

  getFirstProduct()
  {
    this.products=['LED','Mobile'];
    this.prod1=this.products[0];
    return this.prod1;
  }
  

  constructor() { }
}
