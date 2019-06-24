import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { latitute: null, errorMessage: '' };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitute: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated')
  }

  // React says we have to define render!
  render() {   
    if (this.state.errorMessage && !this.state.latitute)  {
      return (
        <div>Error: {this.state.errorMessage}</div>
      )
    }
    if (!this.state.errorMessage && this.state.latitute)  {
      return <SeasonDisplay lat={this.state.latitute} />
    }
    return (
      <div>Loading!</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);