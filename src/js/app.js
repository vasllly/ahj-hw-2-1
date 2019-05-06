// Проверка, что контейнер существует
function bindToDOM(container) {
  if (!(container instanceof HTMLElement)) {
    throw new Error('container is not HTMLElement');
  }
  return container;
}

// Генераци случайного числа
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Рисуем поле 4х4
const container = bindToDOM(document.getElementById('game-container'));
const board = document.createElement('div');
board.classList.add('board');
container.appendChild(board);

for (let index = 0; index < 16; index += 1) {
  const cellEl = document.createElement('div');
  cellEl.classList.add('map-tile');
  cellEl.dataset.id = index;
  board.appendChild(cellEl);
}

// В случайном месте генерируем гоблина
let id = random(0, 16);
let cellEl = bindToDOM(document.querySelector(`div[data-id="${id}"]`));
const goblin = document.createElement('img');
goblin.setAttribute('src', './img/goblin.png');
goblin.setAttribute('height', '100px');
goblin.setAttribute('width', '100px');
cellEl.appendChild(goblin);

// С неким интервалом меняем позицию гоблина (setInterval)
// (алгоритм - рандомное перемещение, без перемещения в то же самое поле)
setInterval(() => {
  let newId = random(0, 16);
  while (newId === id) {
    newId = random(0, 16);
  }
  id = newId;
  cellEl = bindToDOM(document.querySelector(`div[data-id="${id}"]`));
  cellEl.appendChild(goblin);
}, 500);
