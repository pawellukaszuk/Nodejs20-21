## Zasady zaliczenia przedmiotu

Ostateczny termin zaliczenia: 20-21.02.2021 (ostatni zjazd w tym semestrze)

Sposób zaliczenia:
- przygotowujesz rozwiązania wybranych przez siebie zadań
- przesyłasz mi rozwiązania poprzez email, teams, slack (sugeruje nie umieszczać ich w publicznym repozytorium :) )
- wspólnie omawiamy przygotowane rozwiązania:
    - zdalnie, poprzez teams, slack - indywiadualne umawiamy się na konkretny termin
    - osobiście na ostatnich ćwiczeniach 20-21.02.2021

Skala ocen:
- 0-6 pkt => 2
- 7-9 pkt => 3
- 10-12 pkt => 3.5
- 13-16 pkt => 4
- 17-20 pkt => 4.5
- 21 i więcej pkt => 5

### **Uwagi**
1. Możesz użyć dowolnej wersji Node.js >= 12.
2. Możesz użyć dowolnego modułu `npm` - chyba, że treść mówi inaczej

## Zadania

1. [2 punkty] Napisz jak najprostszy kod który wywoła błąd `stack overflow`,

czyli zwróci komunikat błędu:

```
Uncaught RangeError: Maximum call stack size exceeded
```

2. [2 punkty] Napisz aplikację która przyjmuje w parametrze ciąg znaków a następnie wyświetli go w kolorach tęczy. Wykorzystaj moduł `colors` (https://www.npmjs.com/package/colors) w wersji 1.3.2!. Pamiętaj o obsłudze błędów.

Sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem).


3. [2 punkty] Napisz program który wypisze szczegóły pliku z własnym kodem źródłowym.

Wypisywane informacje:
- czas utworzenia
- czas modyfikacji
- rozmiar

Program powinien działać poprawnie także po zmianie nazwy i lokalizacji pliku - bez zmiany kodu źródłowego!

Przykłady wywołania
```bash
> node app.js //wyświetla szczegóły pliku app.js
```
po zmianie nazwy app.js na app2.js
```bash
> node app2.js //wyświetla szczegóły pliku app2.js
```
Podpowiedź: jest to możliwe przy użyciu standardowych modułów Node.js.

4. [5 punktów] Napisz aplikację która odczyta z pliku `data.json` liczbę oraz nazwę pliku, a następnie:
- pobierze z API (http://numbersapi.com/{numer}) informacje o danej liczbie 
- zapisze pobrane informacje w pliku o pobranej wcześniej nazwie

Przykład pliku: data.json
``` JSON
{
    "number": "588",
    "filename": "file.jaon"
}
```

Pamiętaj o obsłudze błędów. Żądania do API oraz zapis do pliku wykonuj asynchronicznie.

5. [10 punktów] Stwórz aplikację która pobierze informacje o użytkowniku, albumie i przypisanych do tego albumu zdjęciach.
- wyświetl email użytkownika
- wyświetl liczbę wszystkich albumów użytkownika
- wyświetl tytuły zdjeć z wybranego albumu
- żądania do API wysyłaj asynchronicznie
- pamiętaj o obsłudze błędów
- podziel rozwiązanie na moduły
- identyfikator użytkownika i identyfikator albumu są podawane w parametrach wejściowych, sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem).

Lista adresów API:
- endpoint do użytkownika: https://jsonplaceholder.typicode.com/users/{id_użytkownika}
- endpoint do albumów: https://jsonplaceholder.typicode.com/albums?userId={id_użytkownika}
- endpoint do zdjęć: https://jsonplaceholder.typicode.com/photos?albumId={id_albumu}

6. [10 punktów] Napisz aplikację pozwalającą na przechowywanie w pliku listy zadań do wykonania (klasyczna lista TODO). Użyj w tym celu biblioteki `yargs` z konstrukcją `command`. Aplikacja powinna pozwalać na dodanie do listy nowego zadania, jak również wyświetlić zawartość całej listy. Przy uruchomieniu bez parametrów aplikacja powinna informować o możliwych parametrach wywołania.

- zapis/odczyt wykonuj asynchronicznie
- pamiętaj o obsłudze błędów
- poinformuj użytkownika o poprawności wykonanych operacji
- wydziel odczyt i zapis informacji do osobnych modułów


Przykład wywołania programu:
```bash
> node app.js dodaj "napisac program na zaliczenie z NodeJS"
```

```bash
> node app.js lista
```
