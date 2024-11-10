import orderFragment from "../fragments/order";

export const getOrderQuery = /* GraphQL */ `
  query getOrder($id: ID!) {
    order(id: $id) {
      ...order
    }
  }
  ${ orderFragment }
`;

export const getOrdersQuery = /* GraphQL */ `
  query getOrders($first: Int = 50) {
    customer {

      orders(first: $first) {
        edges {
          node {
            ...order
          }
        }
      }

    }
  }
  ${ orderFragment }
`;