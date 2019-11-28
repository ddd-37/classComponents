import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/searchBar";
import youtube from "./api/youtube.js";

class App extends React.Component {
  state = {
    videos: []
  };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
