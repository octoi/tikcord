import gql from 'graphql-tag';

export default registerQuery = gql`
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
            id
            name
            email
            token
            profile
            bio
        }
    }
`