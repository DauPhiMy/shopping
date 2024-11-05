import { ProductType } from "@/type/types";
import { Link } from "react-router-dom";

interface PropsType {
  product: ProductType;
}
const ProductCard = ({ product }: PropsType) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="cursor-pointer rounded-sm border border-[#e5e7eb] shadow-lg transition-all hover:scale-105 hover:border-red-600">
        <div className="border-b-2 border-[#e5e7eb]">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="size-full object-cover"
          />
        </div>
        <div className="overflow-hidden bg-white text-center">
          <div className="line-clamp-1 px-2">{product.title}</div>
          <div>{product.price} $</div>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
