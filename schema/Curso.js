module.exports = `
  # Esto es un curso 
  type Curso {
    id: ID!
    titulo: String!
    # Descripción del curso
    descripcion: String!
    profesor: Profesor
    rating: Float @deprecated(reason: "Dejamos de creer en los puntajes")
    comentarios: [Comentario]
  }

  type Comentario {
    id: ID!
    nombre: String!
    cuerpo: String!
  }
`
