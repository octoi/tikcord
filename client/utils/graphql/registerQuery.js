import gql from 'graphql-tag';

const registerQuery = gql`
    mutation register(
        $name: String!,
        $email: String!,
        $password: String!,
    ){
        register(
            name: $name
            email: $email
            password: $password
            bio: "I'm a cool creator",
            profile: "null" 
        ){
            name
            email
            token
            profile
            bio
        }
    }
`

export default registerQuery;