/* ЗАДАЧА 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного
объекта свойство с данным именем. Функция должна возвращать true или false. */

const phone = {
    model: "Samsung",
    year: 2020,
    OC: "Android"
}

let str = "model";

console.log(checkObject(str, phone));

function checkObject(str, theObject) {
    for (let key in theObject) {
        if (key === str) {
            return true;
        } else return false;
    }
}