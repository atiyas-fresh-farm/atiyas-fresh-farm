import { Large } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";

const CartCalculation = ({ className }: { className?: string }) => {
  return (
    <div className={`grid grid-col-2 grid-row-5 py-2 ${className}`}>

      <div className="col-span-1 row-span-1 flex justify-start">Subtotal:</div>
      <div className="col-span-1 col-start-2 row-span-1 flex justify-end">$6.00</div>

      <div className="col-span-1 row-span-2 flex justify-start">Delivery:</div>
      <div className="col-span-1 col-start-2 row-span-2 flex justify-end">$0.60</div>

      <div className="col-span-1 row-span-3 flex justify-start">Tax:</div>
      <div className="col-span-1 col-start-2 row-span-3 flex justify-end">$0.60</div>

      <div className="col-span-1 row-span-4 flex justify-start"><Large>Total:</Large></div>
      <div className="col-span-1 col-start-2 row-span-4 flex justify-end"><Large>$6.60</Large></div>

      <div className="col-span-1 col-start-2 row-span-4 flex justify-end">
        <Badge>Saving $11.23</Badge>
      </div>

    </div>
  );
}

export { CartCalculation };