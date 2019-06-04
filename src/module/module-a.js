import b from './module-b.js';


console.log(b.name);

const app = document.getElementById('app');
const el = document.createElement('p');
el.innerText = b.name;
app.appendChild(el);
