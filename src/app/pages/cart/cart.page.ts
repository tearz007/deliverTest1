import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  selectedItems = [];

  total = 0;
  images = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    // console.log(this.cartService.cart.length)


    this.cartService.getCart().forEach(a => {
      // console.log(a)
      var id =a
      this.images = []
      this.cartService.getImages().subscribe(data => {
       
        data.forEach(a => {
          var data: any = a.payload.doc.data()
          data.id = a.payload.doc.id
           if (id==data.id) {
            this.images.push(data)
            this.total=this.total+data.price
           }
        });

      })
      

    });

  }

  deleteItem(id) {
console.log(id)
    for (let i = 0; i < this.images.length; i++) {
      if (id == this.images[i].id) {
        this.total = this.total - this.images[i].price
        this.images.splice(i, 1)
        this.cartService.cart.splice(i, 1)
      }
    }
  }

}

/*
 this.cartService.cart.forEach(cartData => {

      this.cartService.getImages().subscribe(data=>{
        this.images=[]
        data.forEach(a => {
        var data:any=a.payload.doc.data()
        data.id=a.payload.doc.id


      });

    });

*/
