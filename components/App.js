import React from 'react';
import { connect } from 'react-redux'

import { inputChanged } from '../actions/userActions'

@connect((store) => {
  return {
    user: store.user.user,
    inputValue: store.user.value,
  };
})

class App extends React.Component {
  constructor(props) {
    super(props);
    const fileInput = document.getElementById("csv");
  }

  onInputChange = () => {
    const value = document.querySelector('.test-input').value;
    this.props.dispatch(inputChanged(value));
  }

  render() {
  // console.log('this.props', this.props)
    return (
      <div>
          Hey React Doooo!
          <input type="text" className="test-input" onChange={() => this.onInputChange()}/>
          <h1>{this.props.inputValue}</h1>
          <div id="csv" />
      </div>
    );
  }
}

export default App;
