# Node.js - Laboratorium 4

## Biblioteka dotenv (https://github.com/motdotla/dotenv#readme)
```javascript
require('dotenv').config();

// pobranie wartości zmiennej
const uri = process.env.MY_VARIABLE;

```

plik .env
```
MY_VARIABLE=my-variable-value
```

## `MongoDB` (https://www.mongodb.com/)

Program który uruchamia lokalny serwer bazy danych z podaniem ścieżki do katalogu:
```
c:/mongodb/bin/mongod --dbpath c:/mongodb-data
```

## `MongoDB Node.JS Driver` (https://docs.mongodb.com/drivers/node/current/)

komunikacja aplikacji Node.js z bazą danych MongoDB

Podstawowe przykłady: https://docs.mongodb.com/drivers/node/current/usage-examples/

API: http://mongodb.github.io/node-mongodb-native/3.6/api/

### stworzenie instancji klienta `MongoDB`
```javascript
const { MongoClient } = require('mongodb');

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async err => {
    //...
});
```

### dodanie użytkownika do kolekcji
```javascript
const { MongoClient } = require('mongodb');

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async err => {
    const collectionUsers = client.db("mydatabase").collection("users");

    const addResult = await collectionUsers.insertOne(
            { 
                firstName: "Jan",
                lastName: "Kowalski",
            },                
        );
    console.log(addResult);
});
```

### zmiana imion wszystkich użytkowników w kolekcji
```javascript
const { MongoClient } = require('mongodb');

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async err => {
    const collectionUsers = client.db("mydatabase").collection("users");
    
    const updateResult = await collectionUsers.updateMany({}, { $set: { firstName: 'Jan' } });
    console.log(updateResult);
});
```

### pobieranie wszystkich użytkowników
```javascript
const { MongoClient } = require('mongodb');

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async err => {
    const collectionUsers = client.db("mydatabase").collection("users");

    const findResult = await collectionUsers.find().toArray();
    console.table(findResult);
});
```

### pobieranie użytkowników który posiadają właściwość isActive = true
```javascript
const { MongoClient } = require('mongodb');

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async err => {
    const collectionUsers = client.db("mydatabase").collection("users");

    const findResult = await collectionUsers.find({ isActive: true }).toArray();
    console.table(findResult);
});
```

## Zdalna baza: Atlas MongoDB (https://www.mongodb.com/cloud/atlas/register)

![step 1](./assets/01.png)
![step 2](./assets/02.png)
![step 3](./assets/03.png)
![step 4](./assets/04.png)
![step 5](./assets/05.png)
![step 6](./assets/06.png)
![step 7](./assets/07.png)
![step 8](./assets/08.png)
![step 9](./assets/09.png)
![step 10](./assets/10.png)
![step 11](./assets/11.png)
![step 12](./assets/12.png)
![step 13](./assets/13.png)
![step 14](./assets/14.png)

**W przypadku gdy wystepują problemy z połączeniem, można dodatkowo wykonać kroki:**
![step 15](./assets/15.png)
![step 16](./assets/16.png)
![step 17](./assets/17.png)

## Zadania do wykonania na laboratorium

1. Stwórzymy prostą aplikację która będzie wyświetlała wartość zmiennej środowiskopwej, pobranej z pliku .env .

2. Stwórzmy bazę danych MongoDB w chmurze. W tym celu powinniśmy założyć konto wykorzystując formularz: https://www.mongodb.com/cloud/atlas/register 

Trzeba pamiętać aby dodać swoje IP do odpowiedniej reguły zapory ('white list')!

Do przygotowanej bazy powinniśmy spróbować nawiązać połączenie wykorzystując bibliotekę `mongodb` w `NodeJS`. (przykład użycia jest umieszczony w wskazówkach laboratorium).

Wykorzystując bazę danych MongoDB, stwórzmy aplikację która wykonuje operacje na użytkownikach: dodawanie, edycje, usuwanie, pobieranie wszystkich, pobieranie określonych. Dane dostępowe do bazy danych powinny być przechowywane w pliku .env
