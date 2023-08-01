import { header } from './header';

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
};


header();

googleTranslateElementInit();