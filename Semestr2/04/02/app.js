require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');

// wprowadzamy 'connection string' z naszej zmiennej środowiskowej zapisanej w pliku .env
const uri = process.env.MONGODB_CONNECTION;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// łączymy się z bazą danych
client.connect(async err => {
    // wybieramy odpowiednią bazę danych oraz kolekcję
    const collection = client.db("mydataase").collection("users");

    // pobieramy wszystkie elementy kolekcji 'users'
    console.log(await collection.find().toArray());

    // dodajemy do kolekcji nowego użytkownika
    const insertResult = await collection.insertOne({
        firstName: 'Jan',
        lastName: 'Kowalsi',
        isActive: true
    });
    console.log(insertResult);

    // dodajemy do kolekcji nowego użytkownika z wybranym _id
    const insertWithIdResult = await collection.insertOne({
        firstName: 'Adam',
        lastName: 'Nowak',
        isActive: false,
        _id: new ObjectId("507f191e810c19729de860eb")
    });
    console.log(insertWithIdResult);

    // zmieniamy imię wszystkich użytkowników
    const updateResult = await collection.updateMany({}, { $set: { firstNAme: 'Marek' } });
    console.log(updateResult);

    // pobieramy wszystkich aktywnych użytkowników
    const findResult = await collection.find({ isActive: true }).toArray();
    console.table(findResult);

    // usuwamy wszytkich nieaktywnych użytkowników
    const deleteResult = await collection.deleteMany({ isActive: false });
    console.log(deleteResult);

    client.close();
});
