let question = ['Что из этого не является косметическим средством? \n 1) Помада 2) Татуировка\n 3) Крем 4) Пудра ', 'Кто, в конце концов, скушал Колобка?\n 1)Дед 2)Баба \n 3)Заяц 4)Лиса', 'Какой шахматной фигуры не существует? \n 1)Пешка 2)Конь \n 3)Король 4)Дама', 'Что означает буква «О» в аббревиатуре ОРТ? \n 1)Олигархическое 2)Объективное \n 3)Общественное 4)Однообразное', 'Главный герой в романе Ф. И. Достоевского «Преступление и наказание» \n 1)Расторгуев 2)Чикатило \n 3)Тумбочкин 4)Раскольников', 'В состав любого органического вещества входит… \n 1)кислород 2)углерод \n 3)водород 4)азот', 'Какое слово здесь лишнее? \n 1)Автор 2)Товар \n 3)Отвар 4)Ворот', 'Как назывался самый младший гражданский чин, присваивавшийся согласно Табели о рангах? \n 1)Синодский регистратор 2)Провинциальный секретарь \n 3)Коллежский регистратор 4)Кабинетский регистратор', 'Кто изобрел громоотвод? \n 1)Франклин 2)Рузвельт \n 3)Вашингтон 4)Линкольн', 'Как в России в 15-17вв. назывались феодально-зависимые люди, не имевшие своего хозяйства, жившие и работавшие во дворах крестьян или посадских людей? \n 1)Дворовые 2)Захребетники \n 3)Нахлебники 4)Бестягольные', 'В каком городе находится штаб-квартира Microsoft? \n 1)Нью-Йорк 2)Ричмонд \n 3)Новый Орлеан 4)Сиэтл', 'При каком правителе к России была присоединена территория Финляндии? \n 1)Петр I 2)Екатерина II \n 3)Павел I 4)Александр I', 'Ричард Львиное Сердце был пленен во время \n 1)крестового похода 2)столетней войны \n 3)войны алой и белой розы 4)войны за независимость', 'Известно, что в кириллице многие буквы имели и цифровое значение. Чему равна буква К (како)?\n 1)10 2)20 \n 3)70 4)90', 'Кто такой «молотоглав»?\n 1)Рыба 2)Птица \n 3)Змея 4)Насекомое']; // вопросы
let otvet = [2, 4, 4, 3, 4, 2, 1, 3, 1, 2, 2, 4, 1, 2, 2];  // ответы

let money = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]
let sum = 0;
let answerr;    // тут склад





let b = 0;
for (let i = 0; i < 15; i++) {
    answer = prompt(`Вопрос: ${question[i]}`);
    if (answer == otvet[i]) {
        sum += money[i];
        alert(` Правильный ответ, Ваш выигрышь ${money[i]} `)
        if (money[i] === 900)
            alert(` Вы дошли до несгораемой суммы ${sum} рублей`);
        b = money[i]
    }
    else {
        alert(`Вы проиграли, Ваш выигрышь ${b} рублей`);
        break;
    }
}
alert(`Окончательный выигрышь ${sum} рублей`)