'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const AddToCart = ({ className }: { className?: string }) => {
  
  const [count, setCount] = useState(0);

  return (
    <>
      {
        count ? (
          <ItemCounter count={count} setCount={setCount} />
        ) : (
          <Button
            className={`w-full p-2 bg-lime-700 hover:bg-lime-600 text-primary-foreground rounded-t-none rounded-b-md ${className}`}
            onClick={() => setCount(count + 1)}
          >
            Add to Cart
          </Button>
        )
      }
    </>
  );
}


const ItemCounter = ({ count, setCount }: { count: number, setCount: (e: number)=>void }) => {
  return (
    <div className="grid grid-cols-4 w-full h-10">
      <button
        className="col-span-1 rounded-bl-md border px-2 hover:bg-secondary font-semibold"
        onClick={() => setCount(count - 1)}
      >-</button>
      <input type="text"
        className="col-span-2 outline-none border-y p-2 text-center"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button
        className="rounded-br-md border px-2 col-span-1 hover:bg-secondary font-semibold"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}

export { AddToCart };