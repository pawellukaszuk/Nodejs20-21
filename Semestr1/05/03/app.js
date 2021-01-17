
const myFunc1 = async () => {
    return 'hello world';
}

// jednoznaczne z tym zapisem:

const myFunc2 = () => {
    return new Promise((resolve, reject) => {
        resolve('hello world');
    });
}

 
myFunc1()
    .then(result => {
        console.log(result);
    });

myFunc2()
    .then(result => {
        console.log(result);
    });    