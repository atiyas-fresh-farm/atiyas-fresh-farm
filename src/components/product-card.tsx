const ProductCard = ({ product }: { product: string}) => {
  return (
    <div>
      <h2>{product}</h2>
      <p>{product}</p>
    </div>
  );
}

export { ProductCard };