import React, { useState } from "react";
import "./cake.css";
import { buyCake } from "../redux/cake/cakeAction";
import { connect } from "react-redux";

function CakeInputContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <div className="cake">
      <h1>Num of Cakes: {props.numOfCakes}</h1>
      <div className="buy-cake-div">
        <input
          type="number"
          style={{
            padding: "0.5rem",
            width: "3rem",
            fontSize: "1.1rem",
            textAlign: "center",
            border: "2px solid rgb(221, 76, 117)",
            borderRadius: "5px",
            color: "rgb(221, 76, 117)",
          }}
          min="0"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          value={number}
        />
        <br></br>
        <br></br>
        <button
          onClick={() => {
            props.buyCake(number);
          }}
        >
          <i className="fa-solid fa-cart-shopping"></i> Buy {number}
          {number === 1 ? " Cake" : " Cakes"}
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: (number) => dispatch(buyCake(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeInputContainer);
