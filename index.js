// import { hello, goodbye } from './greeter.js';

// console.log(hello()); // "hello!"
// console.log(goodbye()); // "goodbye!"

// Щоб цей приклад працював додаємо "type": "module" в package.json

// =======================================================================

// const message = 'Hello!';
// console.log(message);

// ======================================
// const validator = require('validator');

// const validateEmail = email => {
//   return validator.isEmail(email);
// };

// console.log('Is mango@mail.com a valid email?: ', validateEmail('mango@mail.com'));
// console.log('Is Mangozedog.com a valid email?: ', validateEmail('Mangozedog.com'));

// =================Named export. Перший спосіб=======================
// import { square, diag } from './my-module.js';

// console.log(square(11)); // 121
// console.log(diag(4, 3)); // 5

// =================Named export. Другий спосіб=======================
// import { square, diag } from './my-module-two.js';

// console.log(square(11)); // 121
// console.log(diag(4, 3)); // 5

// =================Named export. Namespace import (ще один спосіб)=======================
// import * as myModule from './my-module-two.js';

// console.log(myModule.square(11)); // 121
// console.log(myModule.diag(4, 3)); // 5

// =========================Default export===========================
// import myFunc from './my-func.js';
// import MyClass from './my-class.js';

// myFunc();

// const inst = new MyClass();

// ========================Метод JSON.stringify()==========================
// УВАГА/Методи ігноруються
// const dog = {
//   name: 'Mango',
//   age: 3,
//   isHappy: true,
//   bark() {
//     console.log('Woof!');
//   },
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

// ПРИ ПЕРЕДАЧІ ФУНКЦІЇ - undefined
// JSON.stringify(() => console.log('Well, this is awkward')); // undefined

// ======================== JSON. try...catch. Обробка помилок==========================
// Script will crash during parse
// const data = JSON.parse('Well, this is awkward');
// console.log("❌ You won't see this log");

// обробляємо помилку, а код продовжує працювати
// try {
//   const data = JSON.parse('Well, this is awkward');
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log('✅ This is fine, we handled parse error in try...catch');

// приклад обробки 2
// try {
//   const data = JSON.parse('{username: "Mango"}');
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // "Unexpected token u in JSON at position 1"
// }

// console.log('✅ This is fine, we handled parse error in try...catch');

// =====================Web Storage API. localStorage. Збереження========================
// localStorage.setItem('ui-theme', 'light');
// localStorage.setItem('sidebar', 'expanded');
// localStorage.setItem('notification-level', 'mute');

// Збереження масиву або об'єкту
// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// =====================Web Storage API. localStorage. Читання=======================
// localStorage.setItem('ui-theme', 'dark');

// const theme = localStorage.getItem('ui-theme');
// console.log(theme); // "dark"

// ====================================
// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object
