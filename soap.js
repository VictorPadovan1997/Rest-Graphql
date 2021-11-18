const soap = require('soap');

const url = 'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient(url, (err, client) => {
 if (err) {
     console.log('temos um problema');
 } else {
     console.log('it is ok');
     client.consultaCEP({
         cep: '17519330'
     }, (err, res) => {
         console.log(res);
     });
 }
});