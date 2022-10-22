// доступ к элементу по #id board
const board = document.querySelector('#board')
// создаем массив, который будет держать цвета для квадратиков
const colors = ['coral', 'lightblue', 'lightgreen', 'lightyellow', 'pink', 'crimson']
// программная генерация квадратиков (их количество)
const SQUARES_NUMBER = 500
// цикл, который пробегается по 450 квадратикам, создает тег <div>,
// после создает class для квадратика и добавляем его в html (#board)

// добавляем слушатель события для каждого из квадратиков (событие - mouse over)
// и добавляет к листенеру функцию, которая меняет цвет квадратика при наведении мышкой (setColor)

// прописываем саму функцию setColor

// добавляем событие, чтобы цвет квадратика пропадал removeColor

// Чтобы цвет выбирался случайно, нужна функция, содержащая объект Math с методом random
// перемножаем на длину массива, чтобы это было целым числом, мы округляем в меньшую сторону через метод floor
// функция имеет переменную index, которая несет в себе случайный index массива

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor() // сначала получаем сам цвет
    element.style.backgroundColor = color // присваиваемем его элементу (квадратику)
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` //косые кавычки (можем передавать динамическое значение)
    //(делаем крутой объемный цвет)//
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}