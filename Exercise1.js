/* ЗАДАЧА 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
только собственных свойств. Данная функция не должна возвращать значение. */


const phone = {
    model: "Samsung",
    OC: "Android"
}

const myPhone = Object.create(phone);
myPhone.year = "2020";

myFunc(myPhone);

function myFunc (theObject){
    for(let key in theObject){
        if(theObject.hasOwnProperty(key)){
            console.log(key);
        }
    }
}