import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { buyCake, buyIceCream } from "../redux/index";

function ItemContainer(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div className="item-container">
        <i className={props.cake ? "fas fa-cheese" : "fas fa-ice-cream"}></i>
        <h1>
          {props.cake ? "Cake" : "Ice-Cream"} - {props.item}
        </h1>
      </div>
      <button className="hero-button" onClick={props.buyItem}>
        Buy {props.cake ? "Cake" : "Ice-Cream"}
      </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemDispatch = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: itemDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
