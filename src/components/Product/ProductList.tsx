import { ProductType } from "@/type/types";
import ProductCard from "./ProductCard";

interface PropsType {
    products: ProductType[]
}
const ProductList = ({products}: PropsType ) => {
  return <div className="grid grid-cols-5 gap-x-3 gap-y-5">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>;
};
export default ProductList;
