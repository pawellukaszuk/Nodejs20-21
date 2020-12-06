## Zadania do wykonania w czasie ćwiczeń

1. Stwórzenie aplikacji która pozwoli na zapisanie całego obiektu do pliku. Z wykorzystaniem funkcji pozwalającej na przekonwertowanie obiektu na postać tekstową(`JSON.stringify`).

Obiekt do zapisu:
```javascript
const user = {
    name: 'Jan',
    lastName: 'Nowak'
};
```
Wynik zapisać do pliku `user.json`.

2. Rozszerzenie aplikacji z zadania 1 o dynamiczne wprowadzanie danych które chcemy zapisać do pliku. Do wykorzystania ewnętrzny moduł `yargs`.

Przykład uruchomienia aplikacji
```bash
node app.js --name=Adam --lastName=Mickiewicz
```
Wprowadzane dane powinny być zapisane do pliku.

3. Dodanie do naszej aplikacji z zadania 2 przed nadpisaniem nowymi wartościami, wczytanie już wcześniej zapisanego obiektu. W konsoli wypiszmy jedynie imię wczytanego użytkownika.

4. Aplikacja która pobierze informację o użytkowniku podając jego id z API i wyświetli w konsoli współrzędne geograficzne skąd dany użytkownik pochodzi oraz jego imię.

Adres URL do API: https://jsonplaceholder.typicode.com/users/{ID} gdzie `ID` to identyfikator użytkownika.

Endpoint z przykładowym `ID`: https://jsonplaceholder.typicode.com/users/2

Wynik w konsoli
```bash
Ervin Howell
lat -43.9509
lng -34.4618
```

5. Rozszerzeniemy zadanie 4 tak aby aplikacja poinformowała użytkownika o błędzie pobierania danych lub braku szukanego użytkownika w bazie.

6. Dodajmy do zadania 5 dynamicznego wprowadzania `ID` poprzez użycie zewnętrznej biblioteki `yargs`.

Przykład uruchomienia aplikacji
```bash
node app.js --id=2
```

Wynik w konsoli
```bash
Ervin Howell
lat -43.9509
lng -34.4618
```

```bash
node app.js --id=20
```
Wynik w konsoli
```bash
User not found.
```

7. Dodanie do zadanie 6 opcji pobrania pogody dla wczytanego
użytkownika. Odpowiednie zabezpieczenie naszej aplikacji w przypadku błędu API(podobnie jak w zadaniu 5).

Adres do pobrania danych:
```bash
https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat={LAT}&lon={LNG}

gdzie `{LAT}` i `{LNG}` to współrzędne geograficzne pobrane od naszego użytkownika
```
