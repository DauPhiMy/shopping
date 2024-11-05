import Loading from "@/components/loading/Loading";
import { useToast } from "@/hooks/use-toast";
import { addCart } from "@/redux/cartSlice";
import { AppDispatch } from "@/redux/store";
import { ProductType } from "@/type/types";
import axios from "@/util/axiosCustom";
import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProductSinglePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  console.log({ ...product, quantity });
  const increase = () => {
    setQuantity((prev) => {
      const tempQuantity = prev + 1;
      return tempQuantity;
    });
  };
  const decrease = () => {
    setQuantity((prev) => {
      let tempQuantity = prev - 1;
      if (tempQuantity <= 1) tempQuantity = 1;
      return tempQuantity;
    });
  };
  const handleAddCart = () => {
    dispatch(addCart({ ...product, quantity }));
    toast({
      title: "✔ Thêm vào giỏ hàng thành công",
    });
  };
  return (
    <div className="mx-auto my-3 max-w-[1200px] bg-white">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-6 gap-10 p-4">
          <div className="col-span-2">
            <img
              src={product?.thumbnail}
              alt=""
              className="size-full object-contain shadow-md"
            />
          </div>
          <div className="col-span-4 space-y-4">
            <div className="text-xl font-medium">{product?.title}</div>
            <div className="flex items-center gap-3">
              <div>
                <span className="font-medium text-red-500">Ratting: </span>
                <span>{product?.rating}</span>
              </div>
              <div className="h-5 w-[2px] bg-gray-500"></div>
              <div>
                <span className="font-medium text-red-500">Brand: </span>
                <span className="capitalize">{product?.brand}</span>
              </div>
              <div className="h-5 w-[2px] bg-gray-500"></div>
              <div>
                <span className="font-medium text-red-500">Category: </span>
                <span className="capitalize">{product?.category}</span>
              </div>
            </div>
            <div className="bg-[#fafafa] px-3 py-2 text-2xl font-bold text-red-500">
              {product?.price} $
            </div>
            <div className="flex pt-6">
              <span>Số lượng:</span>
              <div className="ml-8 flex items-center">
                <button
                  className="flex size-7 border-collapse items-center justify-center border"
                  onClick={() => decrease()}
                >
                  <FaMinus className="size-3" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    if (Number(e.target.value) <= 1) return setQuantity(1);
                    setQuantity(Number(e.target.value));
                  }}
                  className="h-7 w-12 border-collapse border text-center"
                />
                <button
                  className="flex size-7 border-collapse items-center justify-center border"
                  onClick={() => increase()}
                >
                  <FaPlus className="size-3" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-6 pt-8">
              <button
                className="flex items-center gap-2 border-2 border-red-600 bg-[#d0011b14] px-4 py-2 text-red-600 transition-all hover:opacity-50"
                onClick={() => handleAddCart()}
              >
                <BsCartPlus />
                <span>Thêm vào giỏ hàng</span>
              </button>
              <button className="border-2 border-red-600 bg-red-800 px-4 py-2 text-white">
                <Link to="/cart">Mua ngay</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductSinglePage;
