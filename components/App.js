import React from 'react';
import { connect } from 'react-redux'

@connect((store) => {
  return {
    user: store.user.user
  };
})

class App extends React.Component {
   render() {
    console.log('this.props', this.props)
    return (
       <div>
          Hey React Doooo!
       </div>
    );
   }
}

export default App;
