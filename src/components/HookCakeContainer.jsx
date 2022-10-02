import React from "react";
import "./cake.css";
import { buyCake } from "../redux/";
import { useSelector, useDispatch } from "react-redux";

function HookCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div className="cake">
      <h1>Num of Cakes: {numOfCakes}</h1>
      <div className="buy-cake-div">
        <button onClick={() => dispatch(buyCake())}>
          <i className="fa-solid fa-cart-shopping"></i> Buy now
        </button>
      </div>
    </div>
  );
}

export default HookCakeContainer;
