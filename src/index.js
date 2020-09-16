'use strict';
//polifils
import '@babel/polyfill';
import 'formdata-polyfill';
import 'fetch-polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
import esPromise from 'es6-promise';
elementClosest(window);
esPromise.Promise;

//modules
import counterTime    from './modules/counterTime';
import toggleMenu     from './modules/toggleMenu';
import togglePopUp    from './modules/togglePopUp';
import tabs           from './modules/tabs';
import addSliderDots  from './modules/addSliderDots';
import slider         from './modules/slider';
import changeImage    from './modules/changeImage';
import calcEnterLimit from './modules/calcEnterLimit';
import calc           from './modules/calc';
import sendForm       from './modules/sendForm';
import validateForm   from './modules/validateForm';
import smoothScroll   from './modules/smoothScroll';

counterTime('1 october 2020');
//menu
toggleMenu();
//ANIMATE
togglePopUp();
//tabs
tabs();
//slider
addSliderDots();
slider();
//change image 'Наша команда'
changeImage();
//calc limit
calcEnterLimit();
//calculator
calc(100);
//send-ajax-form
sendForm();
//validate form 
validateForm();
///smooth Scroll
smoothScroll();