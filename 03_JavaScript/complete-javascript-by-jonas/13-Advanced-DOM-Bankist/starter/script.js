'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting Element
//documentElement Return the Root HTML element inside this all elements are present
const rootElement = document.documentElement;
console.log(rootElement);

//using document element you get first element and last element
console.log(rootElement.firstChild);
console.log(rootElement.lastChild);

//document.head --> read the head element
console.log(document.head); // same as first child

//document.body -- Return the Body Dom
console.log(document.body);

//Note: Query Selector()
/**
 * The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. 
If no matches are found, null is returned. 
*/

console.log(document.querySelector('.nav__link'));
console.log(document.querySelector('.nav__link123')); //null  <-- when wrong selector

/**Note: QuerySelectorAll()   --> Doesnot return a live node as if you delete any node it will not update the list
 * The Document method querySelectorAll() returns a static (not live) NodeList representing a
 *  list of the document's elements that match the specified group of selectors
 */
console.log(document.querySelectorAll('.nav__link'));
console.log(document.querySelectorAll('.nav__link123')); //<--NodeList [] empty node list

//getElementsBytag  ---> Return the Live HTML Collectio as you delete any element it will modify the collection

//Note: Explore the GetElement With MDN
console.log(document.getElementById('logo'));
console.log(document.getElementsByClassName('nav__link'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByName('viewport'));

//Note: Creating and intserting element

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use cookied for improvment';
message.innerHTML =
  'We are ready to imrove our website <button class="btn btn--close-cookie"> got it</button>';

const header = document.querySelector('.header');
//header.prepend(message); // add the content in the top
//head er.append(message); // added at the last
// when we use prepend and append then last action take place

//Note: Before and After
//header.before(message);
//header.after(message);

header.insertAdjacentElement('beforebegin', message);
//header.after(message.cloneNode(true));

//Note: Remove

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//Note: style

//inline style get applied to message
message.style.background = '#335555';
message.style.width = '100%';

console.log(message.style.background);
console.log(message.style.height); // bcz inline style not getting applied yet

//GetComputedStleThe Window.getComputedStyle() method returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any
//basic computation those values may contain.

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height); //return default height

const defaultheight = Number.parseFloat(getComputedStyle(message).height, 10);
console.log(defaultheight);
message.style.height = '60px';

//Set Property  -- use to set the global changes
document.documentElement.style.setProperty('--color-primary', 'Red');

//Attribute
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src')); //dynamic src
console.log(logo.className);

//Add attribute
logo.setAttribute('company', 'bank');

console.log(logo.company);
console.log(logo.getAttribute('company'));

const button = document.querySelector('.btn--scroll-to');

//behavior --> use to scroll smooth and auto scroll
const feature = document.querySelector('#section--1');

button.addEventListener('click', function () {
  feature.scrollIntoView({ behavior: 'smooth' });
});
function myMousedown() {
  alert('Mouse Down Function working fine');

  // setTimeout(() => {
  //   button.removeEventListener('mouseover', myMousedown);
  // }, 2000);
}

// button.addEventListener('mouseover', myMousedown);
button.addEventListener('click', myMousedown);

// Event propagation
const randomInt = function (min = 0, max = 255) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
document.querySelector('#a').addEventListener('click', function (e) {
  console.log('link');
  this.style.backgroundColor = `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
});
document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('Nav');
  this.style.backgroundColor = `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
});
document.querySelector('#links').addEventListener(
  'click',
  function (e) {
    console.log('Container');
    this.style.backgroundColor = `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
  },
  true
);

// First Parent Event triger then sub child and child
// Capturing phase, target phase, bubble phse:
//https://www.geeksforgeeks.org/phases-of-javascript-event/

//Note: Event Delegation :
/**
 * Event Delegation is basically a pattern to handle events efficiently.
 * Instead of adding an event listener to each and every similar element,
 * we can add an event listener to a parent element and call an event on a particular
 *  target using the .target property of the event object.
 */

// https://www.geeksforgeeks.org/event-delegation-in-javascript/

//All Nav links

const all_links = document.querySelector('.nav__links');

all_links.addEventListener('click', function (e) {
  e.preventDefault();
  //console.log('Link Test');
  if (e.target.classList.contains('nav__link')) {
    console.log(' The Exact Nav Test');
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView('smooth');
  }
});

//Tabbed component using event delegation
const tabOperation = document.querySelectorAll('.operations__content');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');

tabsContainer.addEventListener('click', function (e) {
  // console.log(e.target);
  console.log(e.target.closest('.operations__tab'));

  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabOperation.forEach(t => t.classList.remove('operations__content--active'));

  if (clicked) {
    clicked.classList.add('operations__tab--active');

    console.log(clicked.getAttribute('data-tab'));
    console.log(clicked.dataset.tab);
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  }
});

const nav = document.querySelector('.nav');
const links = document.querySelector('.nav__links');

const handleover = function (e) {
  console.log('Target', e.target);

  if (e.target.classList.contains('nav__link')) {
    const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
    const logo = e.target.closest('.nav').querySelector('.nav__logo');
    // console.log(logo);

    siblings.forEach(t => {
      console.log('Sibling:', t);
      if (t == e.target) {
      } else {
        t.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};
nav.addEventListener('mouseover', handleover.bind(0.5));
nav.addEventListener('mouseout', handleover.bind(1));

// nav.addEventListener('mouseout', function (e) {
//   // console.log('Target', e.target);

//   // const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');

//   // // const logo = e.target.closest('.nav').querySelector('.nav__logo');
//   // // console.log(logo);

//   // siblings.forEach(t => {
//   //   t.style.opacity = 1;
//   //   logo.style.opacity = 1;
//   // });
// });
