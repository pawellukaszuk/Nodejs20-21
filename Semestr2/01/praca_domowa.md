## Zadania do wykonania we własnym zakresie

6. Stwórzmy aplikację która pobiera 2 parametry `a` i `b` z adresu url i wykona mnożenie w naszej aplikacji. Rezultat działania powinniśmy wysłać do użytkownika końcowego(klienta). 

```
http://localhost:4700?a=5&b=2 //wywołanie
10 //rezultat
```

7. Rozszerzmy naszą aplikację z zadania 6 o dodatkowe działania matematyczne takie jak mnożenie, dzielenie i odejmowanie. Podzielmy zadania na odpowiednie ścieżki.

```
/mnozenie...
/dzielenie...
/dodawanie...
/odejmowanie...
```

Gdy działanie jest niemożliwe do wykonania, aplikacja zwraca odpowiedni komunikat oraz kod statusu `Bad Request`

8. Napiszmy aplikacja która zwróci wszystkie parametry podane w url. Zwracany rezultat powinien być obiektem i mieć `'Content-type':'application/json'`

```
http://localhost:4700?a=5&b=2 //wywołanie
{'a':'1','b':'2'} //rezultat
http://localhost:4700?name=jan&lastname=kowalski //wywołanie
{'name':'jan','lastname':'kowalski'} //rezultat
```


9. Stwórzmy aplikację której zadaniem będzie operacja na tablicy zawierającej użytkowników

    - stworzyć ścieżkę `/add` do dodawania użytkownika która przyjmuje parametry `name`, `username`, `email` np `?name=Jan&username=janko&email=jan@nowak.abc`, dodanie użytkownika powinno zadziałą tyko wtedy gdy zostało wysłane żądanie typu `POST`, jako rezultat należy zwrócić identyfikator dodanego użytkownika (sposób przydzielania identyfikatorów dowolny)
    - dodać ścieżkę `/show` do wyświetlania wszystkich użytkowników (gdy żądanie będzie typu `GET`)
    - rozbudować ścieżkę `/show` tak by wyświetlała jedynie wybranego użytkownika, jeżeli zostanie podany odpowiedni `id` (`/show?id=1`) oraz żądanie będzie typu `GET`, gdy nie ma użytkownika o danym id zwracamy odpowiedni kod statusu
    - rozszerzyć aplikację o kasowanie użytkownika poprzez ścieżkę `/delete?id=1`, gdy nie ma użytkownika o danym id zwracamy odpowiedni kod statusu

10. W wykonanych zadań przygotujmy kolekcję żądań w postmanie tak by móc sprawdzić wszystkie obsługiwane ścieżki
