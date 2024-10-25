import { Trash } from "lucide-react";
import { H2, P, Large, Small } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
//import { ProductCard } from "@/components/product-card";


const Cart = () => {
  
  /**
   * TODO:
   * - check to see if a cart exists for the current user
   * - if not, show a message to add items to the cart
   * - if a cart exists, show the items in the cart
   *  - query the cart items
   */

  /*
  const subcategoryQuery = `
    query subcategoryQuery($category: String!) {
      metaobject(handle: {handle: $category, type: "categories"}) {
        fields {
          references(first: 10) {
            nodes {
              ... on Collection {
                title
                handle
              }
            }
          }
        }
      }
    }
  `;

  const { data, errors } = await shopifyClient.request(subcategoryQuery, {
    variables: {
      category: params.category
    }
  });*/

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10">
        <H2>Cart</H2>
        <Small>5 items</Small>

        <div className="w-full flex flex-row justify-between items-center mt-8">
          <div className="flex flex-row items-center">
            <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
            <p className="ml-4">Banana</p>
          </div>
          <div className="flex flex-row items-center">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <p> x $2.00</p>
            <Trash className="ml-4" size={24} />
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center mt-8">
          <div className="flex flex-row items-center">
            <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
            <p className="ml-4">Banana</p>
          </div>
          <div className="flex flex-row items-center">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <p> x $2.00</p>
            <Trash className="ml-4" size={24} />
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center mt-8">
          <div className="flex flex-row items-center">
            <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
            <p className="ml-4">Banana</p>
          </div>
          <div className="flex flex-row items-center">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <p> x $2.00</p>
            <Trash className="ml-4" size={24} />
          </div>
        </div>

        <div className="w-full flex flex-row justify-end items-center mt-8">
          <div className="w-1/4 grid grid-col-2 grid-row-5">

            <div className="col-span-1 row-span-1">Subtotal:</div>
            <div className="col-span-1 col-start-2 row-span-1">$6.00</div>

            <div className="col-span-1 row-span-2">Delivery:</div>
            <div className="col-span-1 col-start-2 row-span-2">$0.60</div>

            <div className="col-span-1 row-span-3">Tax:</div>
            <div className="col-span-1 col-start-2 row-span-3">$0.60</div>

            <div className="col-span-1 row-span-4"><Large>Total:</Large></div>
            <div className="col-span-1 col-start-2 row-span-4"><Large>$6.60</Large></div>

            <div className="col-span-1 col-start-2 row-span-4">
              <Badge>Saving $11.23</Badge>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center">
          <P>Clear Cart</P>
          <Button>Checkout</Button>
        </div>

      </main>
    </div>
  );
}

export default Cart;