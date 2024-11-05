import { ProductType } from "@/type/types";
import { createSlice } from "@reduxjs/toolkit";

export interface CartType extends ProductType {
  quantity: number;
}
interface innitType {
  carts: CartType[];
}

const fetchCartLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

const setCartLocalStorage = (data: CartType[]) => {
  return localStorage.setItem("cart", JSON.stringify(data));
};
const initialState: innitType = {
  carts: fetchCartLocalStorage(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const cartItem = state.carts.find(
        (item) => item.id === action.payload.id,
      );
      if (cartItem) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            const tempQuantity = Number(
              item.quantity + action.payload.quantity,
            );
            return { ...item, quantity: tempQuantity };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        setCartLocalStorage(state.carts);
      } else {
        state.carts = [action.payload, ...state.carts];
        setCartLocalStorage(state.carts);
      }
    },
    deleteCart: (state, action) => {
      const filter = state.carts.filter((item) => item.id !== action.payload);
      state.carts = filter;
      setCartLocalStorage(state.carts);
    },
    increaseQuantity: (state, action) => {
      const index = state.carts.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (state.carts[index].quantity > 1) {
        state.carts[index].quantity += action.payload.quantity;
        setCartLocalStorage(state.carts);
      } else {
        state.carts[index].quantity += 1;
        setCartLocalStorage(state.carts);
      }
    },
    updateQuantity: (state, action) => {
      const index = state.carts.findIndex(
        (item) => item.id === action.payload.id,
      );

      state.carts[index].quantity = action.payload.quantity;
      setCartLocalStorage(state.carts);
    },
  },
});

export const { addCart, deleteCart, increaseQuantity, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
