import { html, render } from 'lit-html';
import logo from '../assets/logo.png';

export const header = () => {
    const header = html`
        <div class="header">
            <img src="${logo}" width="100px;">
            <h1 class="logo">Two Football</h1>
            <a class="rectangle" href="/">House</a>
            <a class="rect2 rectangle" href="/article1">Article</a> 
            <a class="rectangle" href="/contact">Contact</a>
            <a class="rectangle" href="/shop">Shop</a>
        </div>
    `;
    render(header, document.querySelector('header'));
}