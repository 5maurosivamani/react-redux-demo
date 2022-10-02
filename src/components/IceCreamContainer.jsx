import React from "react";
import "./cake.css";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div className="cake">
      <h1>Num of IceCreams: {props.numOfIceCreams}</h1>
      <div className="buy-cake-div">
        <button onClick={props.buyIceCream}>
          <i className="fa-solid fa-cart-shopping"></i> Buy now
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfIceCreams: state.iceCream.numOfIceCreams,
});

const mapDispatchToProps = (dispatch) => ({
  buyIceCream: () => dispatch(buyIceCream()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
