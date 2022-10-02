import React from "react";
import "./cake.css";
import { buyCake } from "../redux/cake/cakeAction";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div className="cake">
      <h1>Num of Cakes: {props.numOfCakes}</h1>
      <div className="buy-cake-div">
        <button
          onClick={() => {
            props.buyCake();
          }}
        >
          <i className="fa-solid fa-cart-shopping"></i> Buy now
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: () => dispatch(buyCake()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
