import { H2, Small } from '@/components/ui/typography';

const Checkout = () => {
  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10">

        <section className="w-full flex flex-col justify-start items-start mb-10">
          <H2>Checkout</H2>
          <Small>3 items</Small>
        </section>

        <section className="w-full flex flex-col justify-start items-start mb-10">
          <H2>Order Details</H2>
          <Small>3 items</Small>
        </section>

        <section className="w-full flex flex-col justify-start items-start">
          <H2>Payment</H2>
          <Small>3 items</Small>
        </section>

      </main>
    </div>
  );
}

export default Checkout;