import { CartData } from './cart-data';
import { html, render } from 'lit-html';

class Cart {
    constructor () {
        this.cartData = new CartData();
    }

    renderAll () {
        const items = html`
            ${
                this.cartData.getAddedToCart().map(item => html`
                    <div class="cart-item">
                        <h3 class="cart-item-text">${item.label}</h3>
                        <div class="cart-item-img">
                            <img src="${item.img}">
                        </div>
                        <h3 class="cart-item-price">${item.numberOfItems} X $${item.price.toFixed(2)}</h3>
                        <h3 class="cart-item-price">$${(item.numberOfItems * item.price).toFixed(2)}</h3>
                    </div>
                `)
            }
        `;

        render(items, document.querySelector('.add-to-cart-items'));
    }
}

const cart = new Cart();
cart.renderAll();