import React from "react";
import { connect } from "react-redux";
import { countDecreament, countIncreament, countReset } from "./counterAction";

function counterContainer(props) {
  return (
    <div>
      <h3>{props.counter}</h3>
      <button onClick={props.countIncreament}>Increament</button>
      <button onClick={props.countDecreament}>Decreament</button>
      <button onClick={props.countReset}>Reset</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    countIncreament: () => {
      dispatch(countIncreament());
    },

    countDecreament : () => {
        dispatch(countDecreament())
    },

    countReset: () => {
      dispatch(countReset());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(counterContainer);
