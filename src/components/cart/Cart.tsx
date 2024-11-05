import { RootState } from "@/redux/store";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import shoppingImg from "@/assets/img/shopping_cart.png";
const Cart = () => {
  const carts = useSelector((state: RootState) => state.cart.carts);

  return (
    <div className="group relative mx-2">
      <Link to={"/cart"}>
        <BsCart2 className="size-[26px] text-white" />
        <div className="absolute -right-4 -top-1">
          <div className="rounded-full border border-red-600 bg-white px-2 text-sm text-red-600">
            {carts.length}
          </div>
        </div>
      </Link>

      <div className="border-custom invisible absolute -right-10 top-[45px] z-20 scale-0 opacity-0 transition-all duration-150 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
        {carts.length > 0 ? (
          <div className="search-scroll max-h-[460px] w-[360px] overflow-hidden overflow-y-scroll rounded-sm bg-white shadow-md">
            <p className="px-2 py-3 text-base font-medium text-red-600">
              Sản phẩm mới thêm
            </p>
            {carts.map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="flex items-center gap-2 px-2 py-2 hover:bg-[#f5f5f5]"
              >
                <div className="size-[60px] border border-[#f5f5f5] shadow-sm">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="size-full object-contain"
                  />
                </div>
                <p className="line-clamp-1 flex-1">{item.title}</p>
                <span className="w-[60px] text-right">{item.price} $</span>
              </Link>
            ))}
            <div className="mx-2 my-2 flex flex-row-reverse">
              <Link to={"/cart"}>
                <Button variant={"destructive"}>Xem giỏ hàng</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex h-[200px] w-[360px] items-center justify-center rounded-sm bg-white shadow-sm">
            <div className="size-[120px]">
              <img
                src={shoppingImg}
                alt=""
                className="size-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
