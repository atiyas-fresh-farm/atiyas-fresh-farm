import imageFragment from './image';
import seoFragment from './seo';

const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    
    collections(first: 10) {
      nodes {
        id
        handle
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