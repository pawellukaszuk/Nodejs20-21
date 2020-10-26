// deklarujemy stałą 'name' z wartością 'Jan'
const name = "Jan";

// deklarujemy stałą 'lastName' z wartością 'Kowalski'
const lastName = "Kowalski"

// musimy w sposób jawny powiedzieć co jest wyeksportowane
// w tym przypadku powinniśmy stworzyć nowy obiekt zawierający 2 właściwości
module.exports = {
    name: name,
    lastName: lastName,
};
