// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const valueEl = document.querySelector('#value')
const btnDecrementEl = document.querySelector('button[data-action="decrement"]')
const btnIncrementEl = document.querySelector('button[data-action="increment"]')

btnDecrementEl.addEventListener('click', () => {
	counterValue -= 1;
	valueEl.textContent = counterValue;
})

btnIncrementEl.addEventListener('click', () => {
	counterValue +=1;
	valueEl.textContent = counterValue;
})

// const CounterPlugin = function ({selector, counterValue = 0, step = 1} = {}) {
//     this.id = selector;
//     this.value = counterValue; 
//     this.step = step;

//     this.refs = this.getRefs(selector);
//     this.bindEvents(selector);
// };

// CounterPlugin.prototype.getRefs = function (selector) {
//     const refs = {};
//     refs.counterEl = document.querySelector(selector);
//     refs.btnDecrementEl = refs.counterEl.querySelector(`[data-action="decrement"]`);
//     refs.btnIncrementEl = refs.counterEl.querySelector(`[data-action="increment"]`);
//     refs.valueEl = refs.counterEl.querySelector(`#value`);

//     return refs;
// };
// CounterPlugin.prototype.bindEvents = function () {
//     this.refs.btnIncrementEl.addEventListener('click', () => {
//         this.increment();
//         this.newValue();
//     });
//     this.refs.btnDecrementEl.addEventListener('click', () => {
//         this.decrement();
//         this.newValue();
//     })
// };

// CounterPlugin.prototype.newValue = function () {
//     this.refs.valueEl.textContent = this.value;  
// };

// CounterPlugin.prototype.increment = function () {
//     this.value += this.step;
// };

// CounterPlugin.prototype.decrement = function () {
//     this.value -= this.step;
// };

// const counter = new CounterPlugin({selector: '#counter', step: 1});
// console.log(counter);



