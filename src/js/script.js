import { Header } from './header';
import { CartData } from './cart-data';

const cartData = new CartData();
cartData.dump();

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
};


const header = new Header();
header.render();

googleTranslateElementInit();