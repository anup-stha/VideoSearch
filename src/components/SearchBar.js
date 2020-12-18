import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (term.trim() !== "") {
      onSubmit(term);
    } else {
      alert("Enter any thing to search");
    }
  };
  return (
    <div className='ui segment search-bar mt-4'>
      <form className='ui form' onSubmit={onFormSubmit}>
        <div className='field'>
          <label>Video Search</label>
          <input type='text' value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
