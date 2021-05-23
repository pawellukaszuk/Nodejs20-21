const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');

const url = process.env.MONGODB_CONNECTION;

let db;
let tasksCollection;

const init = () =>
    MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
        .then((client) => {
            db = client.db('dbtest');
            tasksCollection = db.collection('tasks');
        });

const getTasks = () => {
    return tasksCollection.find().toArray();
}

const getTask = (id) => {
    return tasksCollection.findOne({ _id: new ObjectId(id) });
}

const deleteTask = (id) => {
    return tasksCollection.deleteOne({ _id: new ObjectId(id) });
}

const addTask = (newTask) => {
    return tasksCollection.insertOne(newTask);
}

const updateTask = (id, completed) => {
    return tasksCollection.updateOne(
        { _id: new ObjectId(id)},
        { $set: { "completed": completed } }
    );
}

module.exports = { init, getTasks, getTask, deleteTask, addTask, updateTask };
