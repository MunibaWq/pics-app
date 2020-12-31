import React from "react";

const SearchBar = () => {
  state = { term: "" };

  return (
    <div className=" ui segment ">
      <form className=" ui form">
        <div className="field">
          <label>User Input</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
