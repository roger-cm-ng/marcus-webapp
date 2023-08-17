import { html, render } from 'lit-html';
import { CartData } from './cart-data';
import logo from '../assets/logo.png';

export class Header {
    constructor () {
        this.cartData = new CartData();
        this.addedItem = this.cartData.getAddedToCart();
    }

    render () {
        this.addedItem = this.cartData.getAddedToCart();
        const header = html`
            <div class="header">
                <img src="${logo}" width="100px;" class="representation">
                <h1 class="logo">Two Football</h1>
                <div class="hamburger"></div>
                <div class="buttons">
                    <a class="rectangle" href="/">Home</a>
                    <a class="rect2 rectangle" href="/article1">Article</a> 
                    <a class="rectangle" href="/contact">Contact</a>
                    <a class="rectangle" href="/shop">Shop</a>
                    <a class="rectangle cartshop" href='cart.html'>
                        <i class="fa fa-shopping-cart"></i>
                        ${this.addedItem.length === 0 ? '' : this.addedItem.length}
                    </a>
                    <div class="dropdown">
                        <button class="dropbtn rectangle cartshop">
                            <i class="fa fa-bars"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
        `;
        render(header, document.querySelector('header'));
    }
}