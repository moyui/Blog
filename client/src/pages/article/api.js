
import gql from 'graphql-tag';
import client from '@/gFetch'

const fetchArticle = ({ number }) => {
  return client.query({
    query: gql`
    query Article{
        repository(owner:"moyui", name: "BlogPosts") {
        issue(number: ${number}) {
          title
          updatedAt
          bodyHTML
        }
      }
    }
  `,
  })
}


export default fetchArticle;