import { CartData } from "./cart-data";
import { Header } from "./header";
import { getQueryParam } from "./utils";
import { html, render } from 'lit-html';

class ShopItem {
    constructor () {
        this.cartData = new CartData();
        this.id = getQueryParam('id');
        this.item = this.cartData.getOne(this.id);
        this.header = new Header();
    }

    addToCartHandler () {
        const btn = document.querySelector('.cartadd');
        const addToCart = () => {
            this.item.isAddedToCard = !this.item.isAddedToCard;
            this.cartData.insert(this.item);
            this.renderOne();
            this.header.render();
        };

        btn.addEventListener('click', addToCart);
    }

    sizesHandler () {
        const btn = document.querySelector('.sizes');
        const sizes = (evt) => {
            this.item.sizes.selected = evt.target.value;
            this.cartData.insert(this.item);
        };

        btn.addEventListener('change', sizes);
    }

    numberOfItemsHandler () {
        const btnMinus = document.querySelector('.clickme-');
        const btnAdd = document.querySelector('.clickme');
        const minus = () => {
            if (this.item.numberOfItems > 1) {
                this.item.numberOfItems = this.item.numberOfItems - 1;
                this.cartData.insert(this.item);
                this.renderOne();
            }            
        };
        const add = () => {
            this.item.numberOfItems = this.item.numberOfItems + 1;
            this.cartData.insert(this.item);
            this.renderOne();
        };

        btnMinus.addEventListener('click', minus);
        btnAdd.addEventListener('click', add);
    }

    renderStars () {
        return html`
            ${
                [0, 1, 2, 3, 4].map((star, index) => {
                    return index < this.item.stars ? html`
                        <h2>★</h2>
                    ` : html`
                        <h2>☆</h2>
                    `
                })
            }
        `;
    }

    renderOne () {
        this.item = this.cartData.getOne(this.id);
        const item = html`
            <img src="${this.item.img}" width="38%" class="blackmerchpage" id="blackmerch">
            <div class="blackmerchinfotxt">
                <h1 class="nametshirt">${this.item.label}</h1>
                <h2>$${this.item.price.toFixed(2)}</h2>
                <div class="stars">  
                    <div class="firststar">
                        ${this.renderStars()}
                    </div>
                </div>
                <div class="info">
                    ${
                        this.item.otherOptions.map(i => html`
                            <a href="/shop-item.html?id=${i.id}">
                                <img class="littleimg" src="${i.img}" width="50px">
                            </a>   
                        `)
                    }
                    <h3 class="size">Size</h3>
                    <select class="sizes" name="sizes">
                        ${
                            this.item.sizes.options.map(i => html`
                                ${
                                    i === this.item.sizes.selected ? html`
                                        <option value="${i}" selected>${i}</option>
                                    ` : html`
                                        <option value="${i}">${i}</option>
                                    `
                                }
                                
                            `)
                        }
                    </select>
                    <h3 class="numofitms">Number of items?</h3>
                    <div class="increase">
                        <button class="clickme-">-</button>
                        <input type="text" id="inc" value="${this.item.numberOfItems}" class="inc" width="10%" />
                        <button class="clickme">+</button>
                    </div>
                    <h3> </h3>
                    <button class="cartadd">${this.item.isAddedToCard ? 'Remove from Cart?' : 'Add To Cart?'}</button>
                </div>
            </div>
        `;
        render(item, document.querySelector('.blackmerchinfo'));
    }
}

const shopItem = new ShopItem();
shopItem.renderOne();
shopItem.addToCartHandler();
shopItem.sizesHandler();
shopItem.numberOfItemsHandler();