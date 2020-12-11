import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  cart=[]
  constructor(private afs: AngularFirestore,) { }


  getImages() {
    return this.afs.collection('Prodact').snapshotChanges();
  }

  setCart(id){

  }
  
}