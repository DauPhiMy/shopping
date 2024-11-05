import { ProductType } from "@/type/types";
import { useEffect, useState } from "react";
import axios from "@/util/axiosCustom";
import { useParams } from "react-router-dom";
import Loading from "@/components/loading/Loading";
import ProductList from "@/components/Product/ProductList";

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([]);
  const { query } = useParams();
  useEffect(() => {
    const fetchSearchProduct = async () => {
      try {
        const res = await axios.get(`/product/search?q=${query}`);
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchProduct();
  }, [query]);
  console.log(products);
  return (
    <div className="mx-auto mt-4 max-w-[1200px]">
      <div className="relative mb-2 rounded-sm bg-white">
        <div className="absolute left-0 top-0 h-full w-1 bg-red-600"></div>
        <p className="py-2 pl-4 text-lg font-medium text-red-600">
          Kết quả tìm kiếm :
        </p>
      </div>
      {loading && (
        <div className="rounded-sm bg-white p-4">
          <Loading />
        </div>
      )}
      {!loading && products.length === 0 ? (
        <div className="rounded-sm bg-white p-4">
          <p className="text-2xl font-medium text-red-600">
            Không có sản phẩm phù hợp
          </p>
        </div>
      ) : (
        <div className="rounded-sm bg-white p-4">
          <ProductList products={products} />
        </div>
      )}
    </div>
  );
};
export default SearchPage;
