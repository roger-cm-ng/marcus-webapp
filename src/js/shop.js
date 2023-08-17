import { CartData } from './cart-data';
import { html, render } from 'lit-html';

class Shop {
    constructor () {
        this.cartData = new CartData();
    }

    renderAll () {
        const items = html`
            ${
                this.cartData.getAll().map(item => html`
                    <a class="tee" href="/shop-item.html?id=${item.id}">
                        <h3 class="blackteetext">${item.label}</h3>
                        <img src="${item.img}" class="blackmerch">
                        <h3 class="blackteetext">$${item.price.toFixed(2)}</h3>
                        <h3 class="addtocart">Add to cart?</h3>
                    </a>
                `)
            }
        `;

        render(items, document.querySelector('.allmerch'));
    }
}

const shop = new Shop();
shop.renderAll();