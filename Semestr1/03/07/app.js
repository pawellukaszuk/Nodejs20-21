// node app.js --id=3
const request = require('request');
const argv = require('yargs').argv;

const userId = argv.id;

const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
request(urlUser, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const user = JSON.parse(body);

        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${user.address.geo.lat}&lon=${user.address.geo.lng}`;
        request(urlWeather, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                const weather = JSON.parse(body);
                
                console.log(weather.main);
            } else {
                console.log('Weather not found');
            }
        });
    } else {
        console.log('User not found');
    }
});
