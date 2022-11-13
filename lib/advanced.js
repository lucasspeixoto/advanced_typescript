"use strict";
//! implements keyword
/* type Animal = {
    name: string,
    voice(): string
}

function log(animal: Animal) {
    console.log(`Animal ${animal.name}: ${animal.voice}`)
}

class Cat implements Animal {
    constructor(public name: string) {}

    voice() {
        return 'meow';
    }
}

class Dog implements Animal {
    constructor(public name: string) {}

    voice() {
        return 'woof';
    }
}

log(new Cat('Salem'))
log(new Dog('Lassie')) */
function addFullName(obj) {
    return Object.assign(Object.assign({}, obj), { fullName: `${obj.firstName} ${obj.lastName}` });
}
const john = addFullName({
    email: 'john@email.com',
    firstName: 'John',
    lastName: 'Trump'
});
console.log(john.email);
