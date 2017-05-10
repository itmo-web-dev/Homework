(function () {
    'use strict';
    /*1. Даны два прямоугольника в виде объектов. 
    Написать функцию, которая проверяет 
    пересекаются ли два прямоугольника.*/

    function dot(a, b) {
        this.a = a;
        this.b = b;
    }

    var dot1 = new dot([2, 7], [9, 4]);
    var dot2 = new dot([2, 6], [9, 5]);

    function intersects(dot1, dot2) {
        return (dot1.a[1] < dot2.b[1] || dot1.b[1] > dot2.a[1] || dot1.b[0] < dot2.a[0] || dot1.a[0] > dot2.b[0]) ?
            console.log('Прямоугольники НЕ пересекаются') : console.log('Прямоугольники пересекаются')
    }

    intersects(dot1, dot2);


//Сплагиачено - но понято..-->

    /*2. Написать симулятор боя. Значения текущей 
    атаки и защиты 2-х противников задаются 
    случайными значениями из выбранного диапазона. 
    Полученный урон = Текущая Атака противника - Ваша текущая защита.
    Здоровье у юнитов задано в коде.
    Необходимо после каждого шага битвы
    (обмена ударами) выводить информацию о бойцах. 
    При окончании битвы вывести статистическую 
    информацию и имя победителя.*/

    function Player(defense, attack, health, name) {
        this.defense = function () {
            return Math.floor(Math.random() * (defense[1] - defense[0] + 1)) + defense[0];
        };
        this.attack = function () {
            return Math.floor(Math.random() * (attack[1] - attack[0] + 1)) + attack[0];
        };
        this.health = health;
        this.name = name;
        this.damage = function (enemy) {
            var atk = this.attack();
            var def = enemy.defense();
            var dmg = atk - def;
            if (dmg > 0) {
                enemy.health = enemy.health - dmg
            } else {
                dmg = 0
            }
            return console.log(this.name + ' с атакой ' + atk + ' наносит удар противнику ' + enemy.name + ' с защитой ' + def + '. ' + enemy.name + ' получается урон = ' + dmg + '. Здоровье игрока ' + enemy.name + '= ' + enemy.health)
        };
    }

    var player1 = new Player([0, 10], [0, 11], 40, 'Здоровяк');
    var player2 = new Player([0, 12], [0, 8], 45, 'Ботан');

    function battle() {
        player1.damage(player2);
        player2.damage(player1);
        if (player1.health <= 0 || player2.health <= 0) {
            clearInterval(intervalID);
        (player1.health <= 0) ? 
                console.log(player2.name + ' победил игрока ' + player1.name + '. Поздравления!!!') 
                    : console.log(player1.name + ' победил игрока ' + player2.name + '. Поздравления!!!')
                    };
    }
var intervalID = setInterval(battle, 200); 
}());