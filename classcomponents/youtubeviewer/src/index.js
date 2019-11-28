import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/searchBar";
import youtube from "./api/youtube.js";
import VideoList from "./components/VideoList";

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
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
