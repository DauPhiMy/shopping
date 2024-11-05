import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CartType,
  deleteCart,
  increaseQuantity,
  updateQuantity,
} from "@/redux/cartSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineDelete } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import shopping from "@/assets/img/shopping_cart.png";
import { Link } from "react-router-dom";
const CartPage = () => {
  const carts = useSelector((state: RootState) => state.cart.carts);
  const dispatch = useDispatch<AppDispatch>();
  if (carts.length === 0) {
    return (
      <div className="my-5 flex flex-col items-center gap-4">
        <div className="size-[120px]">
          <img src={shopping} alt="" className="size-full object-contain" />
        </div>
        <p className="font-bold text-red-600">Giỏ hàng bạn còn trống</p>
        <Button size={"lg"} variant={"destructive"}>
          <Link to={'/'}>Mua ngay</Link>
        </Button>
      </div>
    );
  }
  return (
    <div className="mx-auto my-3 max-w-[1200px] bg-white">
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]">Sản Phẩm</TableHead>
                <TableHead>Số lượng</TableHead>
                <TableHead className="w-[100px]">Giá</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {carts.map((item: CartType) => (
                <TableRow>
                  <TableCell>
                    <div className="flex gap-3">
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="size-20 object-contain"
                      />
                      <p className="font-medium text-base line-clamp-3">{item.title}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center gap-1">
                      <Button
                        variant={"secondary"}
                        onClick={() =>
                          dispatch(
                            increaseQuantity({ id: item.id, quantity: -1 }),
                          )
                        }
                      >
                        <FaMinus />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: Number(e.target.value),
                            }),
                          )
                        }
                        className="w-20"
                      />
                      <Button
                        variant={"secondary"}
                        onClick={() =>
                          dispatch(
                            increaseQuantity({ id: item.id, quantity: 1 }),
                          )
                        }
                      >
                        <FaPlus />
                      </Button>
                      <Button
                        variant={"secondary"}
                        onClick={() => dispatch(deleteCart(item.id))}
                      >
                        <AiOutlineDelete />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    {(item.quantity * item.price).toFixed(2)} $
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col items-center gap-4 px-4 py-2">
            <div>
              <span className="pr-2 font-medium">Tổng giá trị:</span>
              {carts
                .reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)
                .toFixed(2)}
              $
            </div>
            <Button variant={"destructive"} size={"lg"}>
              Thanh Toán
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
