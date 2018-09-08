import "@babel/polyfill";
import './polyfills/index';

import slick from './modules/slick';

document.addEventListener("DOMContentLoaded", function(){
    slick.init();
});