import { html, render } from 'lit-html';
import logo from '../assets/logo.png';

export const header = () => {
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