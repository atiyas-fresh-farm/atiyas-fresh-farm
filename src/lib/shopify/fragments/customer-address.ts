const customerAddressFragment = /* GraphQL */ `
  fragment customerAddress on CustomerAddress {
    id
    firstName
    lastName
    company
    phoneNumber
    address1
    address2
    city
    province
    country
    zip
  }
`;

export default customerAddressFragment;