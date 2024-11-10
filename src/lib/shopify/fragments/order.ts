import customerAddressFragment from "./customer-address";
import imageFragment from "./image";

const lineItemFragment = /* GraphQL */ `
  fragment lineItem on LineItem {
    id
    name
    price {
      amount
    }
    quantity
    totalDiscount {
      amount
    }
    totalPrice {
      amount
    }
    currentTotalPrice {
      amount
    }
    image {
      ...image
    }
    productId
    variantId
    #TODO -----------------------------------------------
    #discountAllocations {}
  }`;

const fulfillmentsFragment = /* GraphQL */ `
  fragment fulfillments on Fulfillment {
    createdAt
    estimatedDeliveryAt
    id
    isPickedUp
    status
    updatedAt
  }
`;

// Note: not including refunds
const orderFragment = /* GraphQL */ `
  fragment order on Order {
    billingAddress {
      ...customerAddress
    }
    cancelledAt
    cancelReason
    confirmationNumber
    createdAt
    edited
    financialStatus
    fulfillments(first: 50) {
      edges {
        node {
          ...fulfillments
        }
      }
    }
    id
    lineItems(first: 250) {
      edges {
        node {
          ...lineItem
        }
      }
    }
    name #identifier
    number #identifier
    paymentInformation {
      paymentCollectionUrl
      paymentStatus
      totalOutstandingAmount {
        amount
      }
      totalPaidAmount {
        amount
      }
    }
    poNumber #purchase order number
    processedAt
    shippingAddress {
      ...customerAddress
    }
    shippingLine {
      handle
      originalPrice {
        amount
      }
      title
    }
    statusPageUrl
    subtotal {
      amount
    }
    totalPrice {
      amount
    }
    totalShipping {
      amount
    }
    totalTax {
      amount
    }
  }
  ${customerAddressFragment}
  ${fulfillmentsFragment}
  ${lineItemFragment}
  ${imageFragment}
`;

export default orderFragment;