/* Задание 5
Переписать консольное приложение из предыдущего юнита на классы. */

class DeviceParent{
    constructor(name) {
        this.name = name;
    }
    switchOnOf(onOrOff){
        if(onOrOff === true){
            console.log("Прибор включен");
        }else console.log("Прибор выключен");
    }
    countPower(power){
        console.log(`Потребляемая мощность ${power} ватт`);
    }
}

class KitchenDevice extends DeviceParent{
    constructor(name, model, year) {
        super();
        this.model = model;
        this.year = year;
    }
    weight(weight){
        console.log(`Вес этого устройства ${weight} кг`);
    }
}

class LivingRoomDevice extends DeviceParent{
    constructor(model, color) {
        super();
        this.model = "Living room Device";
        this.color = color;
    }
    getPrice(price){
        console.log(`Стоимость этого устройства ${price} рублей`);
    }
}

const teapot = new KitchenDevice("Teapot","LG",2018);
const dvdPlayer = new LivingRoomDevice("DVD PLAYER","gray");
console.log(teapot.switchOnOf(true));
console.log(dvdPlayer.countPower(250));
console.log(teapot.weight(5));
console.log(dvdPlayer.getPrice(8700));

