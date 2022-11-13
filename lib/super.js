"use strict";
//! Partial<T>
/* export type Partial<T> = {
  [P in keyof T]?: T[P];
}; */
Object.defineProperty(exports, "__esModule", { value: true });
personStore.setName('Lucas');
personStore.setAge(31);
const name = personStore.getName();
const age = personStore.getAge();
