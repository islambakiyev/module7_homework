/* ЗАДАЧА 4.
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, \
какими свойствами он обладает. */

function DeviceParent(name){
    this.name = name;
}

DeviceParent.prototype.switchOnOf = function (onOrOff){
    if(onOrOff === true){
        console.log("Прибор включен");
    }else console.log("Прибор выключен");
}

DeviceParent.prototype.countPower = function (power) {
    console.log(`Потребляемая мощность ${power} ватт`)
}

function KitchenDevice(name, model, year){
    this.name = name;
    this.model = model;
    this.year = year;
    this.weight = function (weight) {
        console.log(`Вес этого устройства ${weight} кг`);
    }
}

KitchenDevice.prototype = new DeviceParent();


function LivingRoomDevice(model, color) {
    this.model = "Living room Device";
    this.color = color;
}

LivingRoomDevice.prototype = new DeviceParent();

LivingRoomDevice.prototype.getPrice = function(price){
    console.log(`Стоимость этого устройства ${price} рублей`);
}

const microwave = new KitchenDevice("Microwave","Samsung",2015);
const tv = new LivingRoomDevice("Bravia","black");

console.log(microwave.countPower(220));
console.log(microwave.weight(10));
console.log(tv.switchOnOf(true));
console.log(tv.getPrice(12500));

