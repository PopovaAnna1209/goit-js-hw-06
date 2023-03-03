// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.


// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const divEl = document.querySelector('#controls');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const inputEl = divEl.querySelector('input');

const boxesEL = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
 let forNewDivToAdd = [];

 for (let i=0; i < amount; i+=1) {
  const newDiv = document.createElement('div');
  newDiv.style.height = `${30 + 10 * i}px`;
  newDiv.style.width = `${30 + 10 * i}px`;
  newDiv.style.backgroundColor = getRandomHexColor();
  
  forNewDivToAdd.push(newDiv);
 }
 return forNewDivToAdd;
}

btnCreateEl.addEventListener('click', (event) => {
	let newBoxesToAdd = createBoxes(inputEl.value);
	boxesEL.append(...newBoxesToAdd);
})

const destroyBoxes = () => {
  boxesEL.innerHTML = '';
}

btnDestroyEl.addEventListener('click', (event) => {
	destroyBoxes.call();
})




