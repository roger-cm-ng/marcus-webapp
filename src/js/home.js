import { CartData } from './cart-data';
import { html, render } from 'lit-html';

class Home {
    constructor () {
        this.cartData = new CartData();
    }

    render () {
        const items = html`
            ${
                this.cartData.getSome([0, 1, 2]).map(item => html`
                    <a class="tee" href="/shop-item.html?id=${item.id}">
                        <h3 class="blackteetext">${item.label}</h3>
                        <img src="${item.img}" class="blackmerch">
                        <h3 class="blackteetext">$${item.price}</h3>
                        <h3 class="addtocart">Add to cart?</h3>
                    </a>
                `)
            }
        `;

        render(items, document.querySelector('.allmerch'));
    }
}

const home = new Home();
home.render();