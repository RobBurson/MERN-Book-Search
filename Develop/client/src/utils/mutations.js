import gql from 'graphql-tag';

export const U_LOGIN = gql`
mutation login($email: String!, $password: String!) {
    loging(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const A_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const S_BOOK = gql`
mutation saveBook($book: SavedBookInput!) {
    saveBook(book: $book) {
        username
        email
        bookCount
        savedBooks {
            authors
            description
            bookId
            image
            link
            title
        }
    }
}
`;

export const R_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        username
        email
        bookCount
        savedBooks {
            authors
            description
            bookId
            image
            link
            title
        }
    }
}
`;