import config from '@/gconfig';
import ApolloClient from 'apollo-boost';


export default new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        ...config.headers        
    }
});