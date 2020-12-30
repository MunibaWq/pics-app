import React from "react";

const SearchBar = () => {
  return (
    <div className=" ui segment ">
      <form className=" ui form">
        <div class="field">
          <label>User Input</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
