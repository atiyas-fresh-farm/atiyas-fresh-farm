export const getCategoriesQuery = /* GraphQL */ `
  query getCategoriesQuery {
    metaobjects(type: "Categories", first: 100) {
      edges {
        node {
          handle
          id
          type
          fields {
            key
            value
          }
        }
      }
    }
  }
`;