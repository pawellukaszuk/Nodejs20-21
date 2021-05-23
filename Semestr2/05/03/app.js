require('dotenv').config();
const express = require('express');
const app = express();

const { init, getTasks, getTask, deleteTask, addTask, updateTask } = require('./db');

app.use(express.json());

init().then(() => {
    app.get('/tasks', async (req, res) => {
        const tasks = await getTasks();
        res.send(tasks);
    });

    app.get('/tasks/:id', async (req, res) => {
        const { id } = req.params;
        const task = await getTask(id);

        if (task) {
            res.send(task);
        }

        res.statusCode = 404;
        res.send();
    });

    app.post('/tasks', async (req, res) => {
        const newTask = req.body;
        
        // można dodac sprawdzenie czy newTask posiada odpowiednie właściwości, gdy nie to zwracać kod 400 bez dodawania do bazy

        const result = await addTask(newTask);
      
        if (result.insertedCount === 1) {
            res.statusCode = 201;
        } else {
            res.statusCode = 500;
        }

        res.send();
    });

    app.patch('/tasks/:id', async (req, res) => {
        const { id } = req.params;
        const modifiedTask = req.body;

        if (modifiedTask == null || modifiedTask.completed == null) {
            res.statusCode = 400;
        } else {
            const result = await updateTask(id, modifiedTask.completed);

            if (result.modifiedCount === 1) {
                res.statusCode = 204;
            } else if (result.matchedCount === 1) {
                // sytuacja gdy znaleźliśmy taki obiekt w bazie ale nie wykonaliśmy aktualizacji bo nie wymaga zmian
                // można zwrócić 204 - obiekt ma takie wartości jak chcieliśmy
                // można zwrócić 409 - nie wykonano operacji bo obiekt nie wymaga zmian
                // w dokumentacji API należałoby opisać co dokładnie oznaczają statusy błędów w tej operacji
                res.statusCode = 409;
            } else {
                res.statusCode = 404;
            }
        }

        res.send();
    });

    app.delete('/tasks/:id', async (req, res) => {
        const { id } = req.params;
        const result = await deleteTask(id);

        if (result.deletedCount == 1){
            res.statusCode = 204;
        } else {
            res.statusCode = 404;
        }

        res.send();
    });

   app.get('/heartbeat', (req, res) => {
        res.send(new Date());
    });
    
    app.listen(process.env.PORT);
});
