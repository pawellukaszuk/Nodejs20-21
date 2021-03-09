# Node.js - Laboratorium 1

## Wbudowany moduł `HTTP`(https://nodejs.org/dist/latest-v12.x/docs/api/http.html)

Node posiada wbudowany moduł pozwalający na obsługę protokołu http.
Moduł ten jest przeznaczony zarówno do wysyłania żądań po stronie klienta jak również do odbioru i przetwarzania żądań jako serwer.

Dla przykładu, aby wysłać żądanie do serwera po dane musimy wykorzystać funkcję `.get()` lub `.request()`, np.:

```javascript
const http = require('http');

http.get('http://localhost:4700', response => {
    console.log(response);
});
```

Konstrukcja bardzo podobna do zewnętrznego modułu `request` jaki wykorzystywaliśmy we wcześniejszych zajęciach.

Uruchomienie serwera z wbudowanego modułu `HTTP` wygląda następująco:
```javascript
const http = require('http');

// tworzymy nową instancję naszego serwera
const app = http.createServer((req, res) => {
    // zamykamy połączenie wysyłając tekst
    res.end('Hello world!');
});

// uruchamiamy nasz serwer na porcie 4700
app.listen(4700);
```


## Wbudowane API `URL`(https://javascript.info/url)

Pozwala na parsowanie adresu url na obiekt zawierający podział na protokół, adres, parametry wyszukiwania, itp..

```javascript
const url = new URL('http://localhost:4700/abc?q=some-string');
url.host // 'localhost:4700'
url.hostname // 'localhost'
url.href // 'http://localhost:4700/abc?q=some-string'
url.pathname // '/abc'
url.port // '4700'
url.searchParams // 'q 'some-string'
url.searchParams.get("q") // 'some-string'
url.searchParams.has('q'); // true
```

## Zadania do wykonania na laboratorium

1. Stwórzmy pierwszą aplikację serwerową wykorzystując wbudowany moduł `HTTP`, który wyśle do naszego klienta przywitanie. Sprawdźmy czy działa aplikacja poprzez uruchomienie przeglądarki i wysłanie żądania do naszego serwera (port 4700)

2. Dodajmy do zwracanej informacji kod statusu 200 oraz informację o typie zwracanej zawartości

3. Zmodyfikujmy naszą aplikację tak by zwracała różny komunikat i status odpowiedzi w zależności od użytej metody http

4. Zmodyfikujmy naszą aplikację tak by dla żądań pod adresem `http://localhost:4700/users` zwracała komunikat `Hello from Users path` a dla żądeń pod adresem `http://localhost:4700/comments` zwracała komunikat `Hello from Comments path`

5. Dodajmy do aplikacji zwracanie parametru `name` podanego w url, np żądanie pod adres `http://localhost:4700?name=pawel`powinno zwrócić komunikat `Hello pawel`. Gdy nie podano wartości parametru aplikacja powinna zwrócić komunikat `Hello World`.
