import React, { Component } from "react";
import unsplash from "./api/unsplash";
import "./App.css";
import ImageList from "./components/ImageList";
import SearchBar from "./components/searchBar/SearchBar";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    // console.log(response.data.results);
  };

  render() {
    return (
      <div className="App">
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
