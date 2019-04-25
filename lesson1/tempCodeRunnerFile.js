let num = prompt ('Введите число от 1 до 100');

if (num < 49) {
    console.log('Это неверно')
} else if (num > 100) {
    console.log('Много')
} else {
    console.log('Это так')
};

(num == 50) ? console.log('Верно') : console.log ('Неверно!');

switch (num) {
    case num < 49:
        console.log('Это неверно');
        break;
    case num > 100:
        console.log('Это Много');
        break;
    case num > 100:
        console.log('Много!');
        break;
    case 50:
        console.log('Это так');
        break;
    default:
    console.log('Что-то пошло не так');
    break;
}