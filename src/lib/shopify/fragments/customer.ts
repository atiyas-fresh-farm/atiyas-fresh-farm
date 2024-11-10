import customerAddressFragment from "./customer-address";

const customerFragment = /* GraphQL */ `
  fragment customer on Customer {
    id
    firstName
    lastName
    displayName
    emailAddress {
      emailAddress
    }
    phoneNumber {
      phoneNumber
    }
    defaultAddress {
      ...customerAddress
    }
    addresses(first: 20) {
      edges {
        node {
          ...customerAddress
        }
      }
    }
    imageUrl
    #TODO -----------------------------------------------
    #lastIncompleteCheckout {}
    creationDate
  }
  ${ customerAddressFragment }
`;

export default customerFragment;