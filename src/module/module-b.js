const app = document.getElementById('app');
const el = document.createElement('p');
el.innerText = 'module-b.js';
app.appendChild(el);


export default {
    name: 'module-bj'
}