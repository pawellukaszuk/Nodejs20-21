// wczytujemy moduł 'math'
const math = require('./math');

// tworzymy zmienne które będą zawierały rezultaty wywołań funkcji z modułu 'math'
const wynikDodawania = '3 + 5 = ' + math.add(3, 5);
const wynikOdejmowania = '4 - 7 = ' + math.sub(4, 7);
const wynikMnozenia = '6 * 2 = ' + math.multi(6, 2);
const wynikDzielenia = '8 / 2 = ' + math.div(8, 2);

// wyświetlamy wszystkie zmienne zawierające wynik wykonanych funkcji z modułu 'math'
console.log(wynikDodawania);
console.log(wynikOdejmowania);
console.log(wynikMnozenia);
console.log(wynikDzielenia);
// wyświetlamy wartość PI z modułu 'math'
console.log('PI =', math.PI);


// wczytujemy wbudowany moduł 'fs'(file system) i przypisujemy jego wyeksportowane funkcje/zmienne do stałej 'fs'
const fs = require('fs');

// wywołujemy funkcję 'writeFileSync' z naszego modułu 'fs'
// pierwszy parametr funkcji to nazwa pliku, drugi zaś wartość którą chcemy zapisać
fs.writeFileSync('wynik.txt', wynikDodawania);

// funkcja appendFileSync pozwala na dodanie nowych danych do pliku bez jego czyszczenia
fs.appendFileSync('wynik.txt', wynikOdejmowania);
// dla czytelności zapisanych wartości możemy dodać znak nowej linii (\n)
fs.appendFileSync('wynik.txt', wynikMnozenia + '\n');
fs.appendFileSync('wynik.txt', wynikDzielenia + '\n');
