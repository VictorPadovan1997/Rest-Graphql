# Trabalho Sabatine

### Detalhes do solicitado:
- Api com Soap
- Api com Rest
- Api com GraphQL

### Dependencias:
- npm install axios
- npm install soap
- npm install apollo-server
- npm install graphql

### Para testar Local:
- node graphql.js 
- node rest.js 
- node soap.js


Ao executar local o graphql.js ele abrira um servidor(Apolo SandBox) local ao acessar a URL:

insira a query e precione RUN.
```
query {
  buscaCEP(cep: "SeuCEP") {
    cep
    logradouro
    bairro
    complemento
  }
}
```

<img src="https://i.ibb.co/6HDnSrw/Captura-de-Tela-2021-11-18-a-s-14-18-42.png"/>


### Alunos
- Victor Padovam 
- Marcus Vinicius RA: 580279
- Thiago Aki RA: 568236
