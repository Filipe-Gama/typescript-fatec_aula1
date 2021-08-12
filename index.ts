// Import stylesheets
import './style.css';

import { Greeter } from './greeter';

let title: string = 'MeuApp';
let paragraph: string = 'Blábláblá...';

let counter = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appParagraph: HTMLElement = document.getElementById('app.counter');
  appParagraph.innerHTML = counter + '';
}, 1000);

const btn = document.getElementById('app.btn');
btn.addEventListener('click', alertMethod);

function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando pelo TypeScript');
}

// Write TypeScript code!
const appTitle: HTMLElement = document.getElementById('app.title');
appTitle.innerHTML = title;

let greeter = new Greeter('impiedoso');
const appParagraph: HTMLElement = document.getElementById('app.paragraph');
appParagraph.innerHTML = greeter.getGreeting();
