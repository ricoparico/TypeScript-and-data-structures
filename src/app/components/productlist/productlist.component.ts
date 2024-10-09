import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  productList: string[]=["Frozen Goods", "Beauty Product"];
  product: string="";

  addProducts(){
    if (this.product){
      this.productList.push(this.product);
      this.product="";
    }
  }
}
