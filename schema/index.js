const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const Curso = require('./Curso')
const Profesor = require('./Profesor')

const rootQuery = `
  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
  }

  type Mutation {
    profesorAdd(profesor: NuevoProfesor): Profesor
  }
`

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, Profesor, Curso],
  resolvers
})

module.exports = schema
