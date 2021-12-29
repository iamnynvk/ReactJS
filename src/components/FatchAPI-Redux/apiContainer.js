import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchUSER } from "./apiAction";
import DataTable from "./DataTable";


function apiContainer(props) {
  // const [data, setData] = useState(props.user)
  return (
    <div>
      <button onClick={props.fetchUSER}>Fetch Data</button>
      <DataTable  tableData={props.user} />
      {/* {props.user.map(element=><p>{element.id}</p>)} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(">>>>>>>>",state);
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUSER: () => {
      dispatch(fetchUSER());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(apiContainer);
