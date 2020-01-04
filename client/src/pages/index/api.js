import gql from 'graphql-tag';
import client from '@/gFetch'

const getList = (data) => {
    return client.query({
        query: gql`
        query List {
            repository(owner: "moyui", name: "BlogPosts") {
            issues(orderBy: {field: UPDATED_AT, direction: DESC}, labels: null, first: 10) {
                edges {
                    cursor,
                    node {
                        title
                        updatedAt,
                        bodyText,
                        number
                    }
                }
            },
            labels(first: 100) {
                nodes {
                    name
                }
            }
            } 
        }
        `
    })
}

export { getList };