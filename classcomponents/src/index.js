import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // Constructor is called for every new instance of a class
  constructor(props) {
    super(props); // Because we're overriding the constructor function build into React.  We need to call super to bring in the parent's constructor function

    this.state = {
      lat: null,
      errorMessage: ""
    };

    // Because we to find the location data right when this instance is rendered, we should retrieve the data in the constructor
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      error => {
        this.setState({
          errorMessage: error.message
        });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>{this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
