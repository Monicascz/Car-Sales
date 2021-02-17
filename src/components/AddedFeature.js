import React from 'react';
import {connect} from 'react-redux'
import {clearFeature} from '../actions/index'
const AddedFeature = props => {

const handleClick = () =>{
  props.clearFeature(props.feature.id)
}

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>X</button>
      {props.feature.name}
    </li>
  );
};


export default connect(null, {clearFeature})(AddedFeature);
