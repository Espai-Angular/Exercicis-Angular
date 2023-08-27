import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    nom: '',
    adreça: ''
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  onSubmit(): void {
    console.warn('Ordre de compra efectuada!', this.checkoutForm.value);
    this.checkoutForm.reset();
    this.items = this.cartService.clearCart();
  }
}
