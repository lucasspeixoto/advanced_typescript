"use strict";
//! typeof operator
/* const center = {
  x: 0,
  y: 0,
  z: 0,
};

//type Point = typeof center;

const unit: typeof center = {
  x: center.x + 1,
  y: center.y + 1,
  z: center.z + 1,
};

const personResponse = {
  name: "liana",
  email: "liana@email.com",
  firstName: "Liana",
  lastName: "Fernandes",
};

type PersonResponse = typeof personResponse;

function processResponse(person: PersonResponse) {
  console.log(`Full name: ${person.firstName} ${person.lastName}`);
}
 */
function size(input) {
    return typeof input == "number" ? input + "px" : input;
}
size(123);
size("100px");
size("12em");
//size("12ex"); //Error
