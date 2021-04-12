# Node.js - Laboratorium 3

## `middleware` (https://expressjs.com/en/guide/using-middleware.html)

```javascript
const express = require('express');
const app = express();

const customMiddleware = (req, res, next) => {
    // some logic ...
    next(); //optionall but used in most cases 
};

app.use(customMiddleware);

app.get('/', (req, res) => {
    // ...
});

app.listen(4700, () => console.log('start server'));
```
## Zadania do wykonania na laboratorium

1. Stwórzmy swoje pierwsze oprogramowanie pośredniczące (`middleware`). Zadaniem `middleware` będzie nasłuchiwanie wszystkich żądań do serwera i wyświetlenie w konsoli informacji na jaki adres użytkownik próbuje się dostać, jaką metodą oraz jakie parametry podano w query stringu.

2. Kolejnym zadaniem jest stworzenie `middleware`, który zabezpieczy naszą aplikację przed dostępem osób nieupoważnionych. Użytkownik powinien wysłać w nagłówku token, który autoryzuje go i wpuszcza do dalszej części aplikacji.
Przyjmijmy, że nazwa nagłówka to `authorization`, a wartość która wpuszcza nas do systemu to `alamakota`.

3. Zmodyfikujmy zadanie 2 tak aby nagłówek `authorization` składał się z użytkownika i hasła (wzór: `login:password`, np. `jan:alamakota`) oraz sprawdżmy czy w systemie jest taki użytkownik z takim hasłem.
Lista użytkowników niech będzie tablicą:
```javascript
const users = [{
    login: 'jan',
    password: 'alamakota',
    name: 'Jan',
}, {
    login: 'adam',
    password: 'cukierki',
    name: 'Adam',
}]
```

4. Zmodyfikujmy aplikację z zadania 3 tak, aby zwracała ona imię zalogowanego użytkownika np `Hello Adam`. Imię pobieramy z listy użytkowników.

5. Wykorzystując zewnętrzny `middleware` `body-parser` (https://www.npmjs.com/package/body-parser , funkcja `bodyParser.text()` ), odczytajmy zawartość żądania POST z body typu `text` i sprawdźmy, czy w przesłanym przez użytkownika tekście nie zostały umieszczone niedozwolone słowa. Jeżeli jakieś słowo ze słownika znajduje się w żądaniu, wyslijmy błąd do użytkownika końcowego (status błędu `400`). Jeżeli przesłany tekst jest 'bezpieczny' to zapiszmy go w pliku `data.txt`.

Przykładowy słownik zakazanych słów: `['piwo', 'hazard', 'cukierki']`. 

Stwórzmy tutaj dodatkowo endpointy do
- wyświetlania zawartości pliku z tekstem przesłanym przez użytkowników
- wyświetlania listy zakazanych słów

6. Stwórzmy `middleware`, który sprawdzi czy podana ścieżka jest ścieżką do pliku fizycznego na dysku (tutaj może być pomocny moduł `fs`). Jeżeli tak to powinniśmy ten plik wysłać do klienta. Jeżeli jednak nie możemy odnaleźć, powinniśmy przesłać dalej wykonywanie naszego żądania i zwrócić stosowny komunikat. (Przyjmujemy że szukamy plików tylko w folderze z kodem aplikacji.)

7. Spróbujmy osiągnąć taki sam rezultat korzystając z middleware Express `express.static`
