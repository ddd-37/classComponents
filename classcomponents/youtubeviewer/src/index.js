import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/searchBar";
import youtube from "./api/youtube.js";

class App extends React.Component {
  onTermSubmit = term => {
    youtube.get("/search", {
      params: {
        q: term
      }
    });
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
