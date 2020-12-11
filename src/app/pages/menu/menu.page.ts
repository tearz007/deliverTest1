import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  slideOps = {
    slidesPerView: 2,
    spaceBetween: 2,

  };

  images=[]

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {

    
    this.cartService.getImages().subscribe(data=>{
      this.images=[]
      data.forEach(a => {
      var data:any=a.payload.doc.data()
      data.id=a.payload.doc.id
      this.images.push(data)
    });
   
    })
   
  }

setCart(id){
this.cartService.setCart(id)
}
 

}



















 /* 
  cart = [];
  items = [];

  hotCoffee=[]

 
 
 add(product) {
     this.cartService.addToCart(product);
     console.log(this.cartService.getCart());
   }
 
   goCart() {
     this.router.navigateByUrl('tabs/cart');
   }*/


 /* getHotC() {
    this.cartService.hotCoffee.forEach(a => {
      // console.log(a)
    });

    for (let i = 0; i < this.cartService.hotCoffee.length; i++) {
      // console.log(this.cartService.hotCoffee[i])
      this.hotCoffee.push(this.cartService.hotCoffee[i])
    }

    for (let i = 0; i < this.hotCoffee.length; i++) {
       console.log(this.hotCoffee[i])
      
    }


   
  }*/
