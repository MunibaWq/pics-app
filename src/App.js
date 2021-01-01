import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";

class App extends Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: process.env.REACT_APP_UNSPLASH_API_KEY,
      },
    });
    console.log(response.data.results);
    // .then((response) => {
    //   console.log(response);
    // });
    // .then((response) => {
    //   console.log(response.data.results);
    // });
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
