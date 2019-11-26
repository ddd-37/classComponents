import React from "react";

class SearchBar extends React.Component {
  state = {
    // Check it out below in the input, we've basically create a controlled input here.
    // A controlled component allows us to store the information in React and not just in the HTML
    // -- without with the HTML would be the only thing that knows what the value of the input is.
    // We can look directly at our React component (no need to look at the DOM) and find the value in the state.
    term: ""
  };

  // Using an arrow function here binds the value of this inside the function body to SearchBar
  onFormSubmit = e => {
    e.preventDefault();

    // Function passed in as callback from App
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" action="" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
