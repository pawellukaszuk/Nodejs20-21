# Node.js - Laboratorium 5

## REST API (https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md)

## Zadania do wykonania na laboratorium

1. REST - Projekt przykładowego API 

Mamy następujące zasoby: 
- Student, Szkoła , Kurs, Wykład
- Student i Szkoła  mogą istnieć jako niezależne byty
- Reszta zasobów jest powiązana z zasobami głównymi

Zaprojektujmy REST API które umożliwi:
- Pełnego CRUD’a dla Studentów i Szkoły
- Dodawanie kursów do szkoły 
- Listowanie kursów w danej szkole, z wyszukiwaniem po nazwie i roku startu
- Dodawania wykładów do kursów
- Listowanie wykładów w ramach kursu w danej szkole
- Zapisywanie studentów na kurs w danej szkole

2. Wykorzystując bazę danych MongoDB oraz serwer Express stwórzymy aplikację która odostępni endpointy:
- `/tasks` który zwróci wszystkie dokumentu z kolekcji `tasks`
- `/heartbeat` który zwróci aktualną datę i czas

3. Wykorzystując bazę danych MongoDB, stwórzmy aplikację typu lista zadań (`todo list`), wykonaną w podejściu `REST API`.
Aplikacja powinna pozwalać na:
- dodanie nowego dokumentu do naszej bazy w postaci:
```JSON
{
	"task": "naprawić samochód",
	"description": "coś stuka po lewej",
	"completed": false,
	"createdTime": "23-05-2021"
}
```
- zmodyfikowanie zadania - poprzez określenie czy dane zadanie zostało wykonane
```JSON
{
    "completed": true
}
```

- usunięcie zadania
- pobranie wszystkich zadań
- pobranie pojedynczego zadania

Pamiętajmy o zwracaniu poprawnych kodów odpowiedzi.
