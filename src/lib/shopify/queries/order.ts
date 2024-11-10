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
  query getOrders($last: Int = 50) {
    customer {

      orders(last: $last) {
        edges {
          cursor
          node {
            ...order
          }
        }
      }

    }
  }
  ${ orderFragment }
`;