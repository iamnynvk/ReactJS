import React from "react";
import { connect } from "react-redux";
import buyIcecream from "./icecreamAction";

function icecreamContainer(props) {
  return (
    <div>
      <h3>Number of Ice-Cream {props.numOfIceCreams}</h3>
      <button onClick={props.buyIcecream}>Buy Cakes</button>
    </div>
  );
}

// this function get state as peremeter and has return a object
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.icecreamReducer.numOfIceCreams,
  };
};

const mapDispatchToProps = dispatch => {
    return{
        buyIcecream : () => {
            dispatch(buyIcecream())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(icecreamContainer);
