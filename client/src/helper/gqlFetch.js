import ApolloClient from 'apollo-boost';

export default new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        "Authorization" : `token 34a401f2e7b2bd2098a8fa5c9d37eea575118a9c`,
    }
});