// wczytujemy moduł 'user' i przypisujemy do stałej user;
// w takim przypadku stała będzie obiektem składającym się z 2 właściwości('name' oraz 'lastName')
const user = require('./user');

// aby odwołać się do imienia i nazwiska powinniśmy zastosować odwołanie 'user.name' oraz 'user.lastName'
// konsola zwróci: hello Jan Kowalski
console.log('hello', user.name, user.lastName);
