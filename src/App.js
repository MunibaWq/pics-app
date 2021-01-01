import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: process.env.REACT_APP_UNSPLASH_API_KEY,
      },
    });
    this.setState({ images: response.data.results });
    // console.log(response.data.results);
  };

  render() {
    return (
      <div className="App">
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length}
        </div>
      </div>
    );
  }
}

export default App;
