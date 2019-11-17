import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        "Authorization" : `token b079cfe66b3f82bba646dfdc4a2ea30e441228dd`,
    }
});

const testQuery = client.query({
    query: gql`
    query Article  {
        repository(owner:"moyui", name: "BlogPosts") {
        issue(number: "1") {
          title
          updatedAt
          bodyHTML
        }
      }
    }
  `,
})


export default testQuery;