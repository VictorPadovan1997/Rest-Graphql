const axios = require('axios');
const cep = '17519330';
const url = 'https://viacep.com.br/ws/' + cep + '/json/';
axios.get(url, {}).then(response => {
    console.log('it is ok');
    console.log(response)
}).catch(error => {
    console.log('temos um problema');
    console.log(error)
});