import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // Constructor is called for every new instance of a class
  constructor(props) {
    super(props); // Because we're overriding the constructor function build into React.  We need to call super to bring in the parent's constructor function

    this.state = {
      lat: null
    };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      error => console.log(error)
    );

    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
