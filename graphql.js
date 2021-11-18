const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios')
const typeDefs = gql`
  type CEPInfo {
    cep: String,
    logradouro: String,
    complemento: String,
    bairro: String,
    localidade: String,
    uf: String,
    unidade: String,
    ibge: String,
    gia: String,
  }
  type Query {
    buscaCEP(cep: String!): CEPInfo
  }
`;

const getApiRoute = (cep) => `http://viacep.com.br/ws/${cep}/json/`;

const resolvers = {
    Query: {
        buscaCEP: async (parent, args, context, info) => {

            try {

                const result = await axios.get(getApiRoute(args.cep))
                return result.data

            } catch (e) {

                console.log(e)
                throw e
            }

        },
    },
};

// The ApolloServer constructor 
const server = new ApolloServer({ typeDefs, resolvers });

server.listen(8080).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});