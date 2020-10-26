// wczytujemy moduł 'user' do stałej user;
// w takim przypadku stała będzie miała wartość 'Jan' gdyż plik 'user.js' wyeksportował string o wartości 'Jan'
const user = require('./user');

// konsola zwróci: hello Jan
console.log('hello', user);
