import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./cakeAction";

function cakeContainer(props) {
  return (
    <div>
      <h3>Number of Cakes {props.numOfCakes}</h3>
      <button onClick={props.buyCake}>Buy Cakes</button>
    </div>
  );
}

// this function get state as peremeter and has return a object
const mapStateToProps = (state) => {
  console.log("hrllo",state)
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = dispatch => {
    return{
        buyCake : () => {
            dispatch(buyCake())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(cakeContainer);
