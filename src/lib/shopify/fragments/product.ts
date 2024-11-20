import imageFragment from './image';
import seoFragment from './seo';

const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    variants(first: 1) {
      edges {
        node {
          id
        }
      }
    }
    collections(first: 50) {
      edges {
        node {
          handle
          title
        }
      }
    }
    priceRange {
      maxVariantPrice {
        amount
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
  }
  ${imageFragment}
  ${seoFragment}
`;

export default productFragment;