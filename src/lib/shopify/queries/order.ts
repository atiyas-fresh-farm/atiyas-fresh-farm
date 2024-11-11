import orderFragment from "../fragments/order";

export const getOrderQuery = /* GraphQL */ `
  query getOrder($orderId: ID!) {
    order(id: $orderId) {
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