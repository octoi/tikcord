import gql from 'graphql-tag';

const loginQuery = gql`
    mutation login(
        $email: String!,
        $password: String!,
    ){
        login(
            email: $email
            password: $password
        ){
            name
            email
            token
            profile
            bio
        }
    }
`

export default loginQuery;