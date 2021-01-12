## Zadania do wykonania w czasie ćwiczeń

## `Promise`

```javascript
const myCustomPromise = new Promise((resolve, reject) => {
    if (/* some logic ... */) {
        resolve('yay! it works');
    } else {
        reject('something went wrong');
    }
});

myCustomPromise
    .then(result => {
        console.log(result);
        return 'some other text';
    })
    .then(text => {
        console.log(text);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('this message show up when all promises will end');
    });
```

## `util.promisify`

https://nodejs.org/dist/latest-v13.x/docs/api/util.html#util_util_promisify_original

```javascript
const util = require('util');
const fs = require('fs');

const writeFile = util.promisify(fs.writeFile);

const data = 'ala ma kota';

writeFile('some-file.txt', data)
    .then(() => {
        console.log('file saved');
    })
    .catch((error) => {
        console.log('error saving file', error);
    });
```

## Przydatne linki

- https://javascript.info/promise-basics
- https://developers.google.com/web/fundamentals/primers/promises
- https://exploringjs.com/es6/ch_promises.html
- https://medium.com/dailyjs/asynchronous-adventures-in-javascript-promises-1e0da27a3b4

## Zadania do wykonania na laboratorium

1. Zadaniem jest stworzeniem funkcji zwracającej `Promise` której rozwiązaniem ma być wartość `hello world`.

```javascript
const helloPromise = ... // <- implementacja Promise

helloPromise
    .then(text => {
        console.log(text);
    });
```

2. Modyfikacja zadanie 1 tak aby rozwiązanie `Promise` było asynchroniczne, z użyciem funkcji `setTimeout` z 5 sekundowym opóźnieniem.

3. Stworzenie funkcji odejmowania 2 liczb z wykorzystaniem `Promise`. Jeżeli wynik działania będzie ujemny `Promise` powinien zwrócić błąd, jeżeli wynik będzie dodatni `Promise` powinien się rozwiązać poprawnie przekazując wynik działania.

```javascript
const sub = (a, b) => {
    ... // <- implementacja Promise
}


sub(3, 4)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    });
```


4. Pobranie danych użytkownika z adresu (https://jsonplaceholder.typicode.com/users/2) przy użyciu zewnętrznej biblioteki `request`. Należy przerobić wywołanie zapytania aby wykorzystywało `Promise`.

```javascript
const getUser = (id) => {
    ... // <- implementacja Promise
}


getUser(2)
    .then(...)
    .catch(...);
```

5. Dodanie do aplikacji z zadania 4 pobierania pogody dla naszego użytkownika. Analogicznie jak w zadaniu 4. 

Endpoint do pogody: https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={lat}&lon={lng}

Zarys wywołania aplikacji: 

```javascript
...
const getWeather = (lat, lng) => ...


getUser(2)
    .then(user => {
        ...
        return getWeather(...)
    })
    .then(weather => ...)
    .catch(...);
```

6. Modyfikacja zadanie 5 tak, aby pobrać kilku użytkowników w tej samej chwili wykorzystując `Promise.all()`. Wyświetlenie ich imion w konsoli. (id użytkowników: 2,5,7). Dodatkowo wyświetlenie informacji, że `Promise` został w pełni zakończony.

7. Dodanie zadania 5 zapisu całego obiektu pogody do pliku wykorzystując wbudowany moduł `fs` i funkcję `writeFile`. Zadanie polega na odpowiednim dostosowaniu funkcji aby obsługiwała `Promise`. 