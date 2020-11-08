## Zadania do wykonania w czasie ćwiczeń

1. Stworzenie aplikacji składającej się z 2 plików `app.js` oraz plików z `utils.js` w którym to zostanie zaimplementowana funkcja która zwraca nową tablicę bez zduplikowanych elementów.

Przykładowy kawałek kodu `app.js`:
```
const utils = ...

const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];

const funcResult = utils.uniq(someArray);

console.log(funcResult);
```

Wynik:
```
[ 'ala', 3, 'ma', 'kota', 2, 5 ]
```

2. Rozszerzenie poprzedniego zadania o nową funkcję która:
przyjmuje jako argument dwie tablice i zwraca elementy które są tylko w pierwszej tablicy.

Przykładowe dane wejściowe:
```
const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

console.log(utils.diff(tabA, tabB));
console.log(utils.diff(tabB, tabA));]
```

Wynik:
```
['kota']
['psa']
```

3. Zmiana 2 zadania tak, by funkcje pochodziły nie z naszego modulu utils lecz z repozytorium `npm` (nazwa modułu `lodash`).

4. Znalezienie minimalnej oraz maksymalnej wartości w tablicy przy użyciu biblioteki `lodash` 

Przykładowe dane wejściowe:
```
[3, 5, -20, -1002, 234, 542, 6, 23, -3, 8]
```

Wynik:
```
Max: 542
Min: -1002
```

5. Zainstalowanie globalnego modułu 'nodemon'(https://www.npmjs.com/package/nodemon), który umożliwia automatyczne restartowanie w przypadku wykrycia zmian w uruchomionych aplikacjach.
Aplikacja wyświetla w konsoli dowolny komunikat. Po zmianie kodu aplikacji (i zapisaniu zmian) powinna się ona automatycznie uruchomić ponownie.

6. Stworzenie kalkulatora wprowadzonych danych. Przy użyciu zewnętrznej biblioteki `yargs` (moduł odpowiedzialny parsowanie parametrów wejściowych). 

Przykładowy sposób uruchomienia:
```
> node app.js --a=5 --b=7 --operator=*
```

Konsola powinna zwrócić wynik operacji:

```
wynik: 35
```
