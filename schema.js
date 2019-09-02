const typeDef =  `

input DepartmentInput{
    id: Int
    name: String
}

type Department{
    id: String
    name: String
}

type Person{
    id: String
    name: String
    departments: Department
}

type Query {
    persons: [Person]
    person(id: String): Person
}

type Mutation{
    createPerson(name:String,departments:DepartmentInput): Person
    deletePerson(id: String!): Person
}`;

export default typeDef;