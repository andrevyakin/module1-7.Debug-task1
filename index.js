let health = prompt('Введите число параметра "здоровье" для персонажа')
//if () {
//health < 0 || health!
//Ошибка 1. Логическое выражение должно быть в скобках после if,
//после < должно быть =,
//и ! должен быть перед health
//По идее еще нужна проверка на NaN
//Правильно
if (health <= 0 || !health || isNaN(Number(health))) {
    console.log("Зашли в if");
    alert('Параметр "здоровье" должен быть больше нуля!')
} //else () {
    //Ошибка 2. После else скобки не ставятся.
//Правильно
else {
    console.log("Зашли в else");
    //alert(Параметр "здоровье" равен ${Health});
    //Ошибка 3. Строка Параметр "здоровье" равен ${Health} должна быть в ``
    //и переменная health написана не правильно.
    //Правильно
    alert(`Параметр "здоровье" равен ${health}`);
}