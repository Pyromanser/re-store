import updateBookList from "./book-list";
import updateShoppingCart from "./shpping-cart";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  };
};

export default reducer;