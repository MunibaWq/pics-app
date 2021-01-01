import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";

class App extends Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="App">
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
