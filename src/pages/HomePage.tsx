import ProductList from "@/components/Product/ProductList";
import { useEffect, useState } from "react";
import axios from "@/util/axiosCustom";
import { ProductType } from "@/type/types";
import Loading from "@/components/loading/Loading";

const HomePage = () => {
  const category = ["beauty", "fragrances", "furniture", "groceries"];
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const res = await axios.get("/product?limit=40");
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProduct();
  }, []);
  const product0 = products.filter((item) => item.category === category[0]);
  const product1 = products.filter((item) => item.category === category[1]);
  const product2 = products.filter((item) => item.category === category[2]);
  const product3 = products.filter((item) => item.category === category[3]);
console.log(product0)
  return (
    <div className="mx-auto my-4 max-w-[1200px]">
      <div className="space-y-5">
        <div>
          <div className="relative mb-2 overflow-hidden rounded-sm bg-white">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-600"></div>
            <p className="py-2 pl-4 text-lg font-medium uppercase text-red-600">
              {category[0]}
            </p>
          </div>
          <div className="rounded-sm bg-white p-4">
            {loading ? <Loading /> : <ProductList products={product0} />}
          </div>
        </div>
        <div>
          <div className="relative mb-2 overflow-hidden rounded-sm bg-white">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-600"></div>
            <p className="py-2 pl-4 text-lg font-medium uppercase text-red-600">
              {category[1]}
            </p>
          </div>
          <div className="rounded-sm bg-white p-4">
            {loading ? <Loading /> : <ProductList products={product1} />}
          </div>
        </div>
        <div>
          <div className="relative mb-2 overflow-hidden rounded-sm bg-white">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-600"></div>
            <p className="py-2 pl-4 text-lg font-medium uppercase text-red-600">
              {category[2]}
            </p>
          </div>
          <div className="rounded-sm bg-white p-4">
            {loading ? <Loading /> : <ProductList products={product2} />}
          </div>
        </div>
        <div>
          <div className="relative mb-2 overflow-hidden rounded-sm bg-white">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-600"></div>
            <p className="py-2 pl-4 text-lg font-medium uppercase text-red-600">
              {category[3]}
            </p>
          </div>
          <div className="rounded-sm bg-white p-4">
            {loading ? <Loading /> : <ProductList products={product3} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
