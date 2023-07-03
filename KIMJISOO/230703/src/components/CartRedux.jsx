import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/modules/cartSlice";

const CartRedux = () => {
  const dispatch = useDispatch();
  const addItems = useSelector((state) => state.cart);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <h1>Redux로 쇼핑 카트 만들기</h1>
      <ul>
        {addItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <button onClick={() => handleAddItem("상품 1 - 10000원")}>
        상품1 추가
      </button>
      <button onClick={() => handleAddItem("상품 2 - 20000원")}>
        상품2 추가
      </button>
    </>
  );
};

export default CartRedux;
