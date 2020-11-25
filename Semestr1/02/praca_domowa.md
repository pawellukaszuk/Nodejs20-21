## Zadania do wykonania we własnym zakresie

7. Modyfikacja aplikacji z zadania 6 tak, by stworzone funkcje wywoływały funkcję `callback` podaną jako 3 parametr. Wynik powinien być przekazany jako parametr wywołania funkcji `callback`, przykład:

```
function add(a, b, callback) {
    const result = ...;

    callback(result);
}

// wywołanie:

add(2, 4, function someCallback(wynik) {
    console.log(wynik);
})
```

8. Dodanie do poprzedniej aplikacji zapisu do pliku przy użyciu modułu `fs` oraz funkcji asynchronicznej `writeFile`.

9. Stworzenie aplikacji, która wyświetli na ekranie przywitanie użytkownika aktualnie zalogowanego na komputerze po 5 sekundach od uruchomienia aplikacji.
Do wykorzystania moduł `os`, funkcja `userInfo()`, oraz funkcja `setTimeout()`.

10. Modyfikacja zadanie 9 tak aby zapisać nasze przywitanie do pliku używając funkcji `writeFile`.
