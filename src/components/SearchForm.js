import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    const {
      searchTextSubreddit,
      searchTextTag,
      sortBy,
      limit,
      tagsLength,
      handleTextChange,
      handleSelectChange,
      addTag,
      setSubreddit,
      warning,
      subreddit,
      resetSubreddit
    } = this.props;
    return (
      <form className="search-form">
        <div className="input-container">
          <div className="search-box-container">
          {subreddit ? (
            <button
              className="btn"
              id="reset-btn"
              type="button"
              name="reset"
              title="Return to Frontpage"
              onClick={resetSubreddit}
            >
              <i className="material-icons">home</i>
            </button>
          ) : null}
            <input
              className="search-box"
              type="text"
              name="searchTextSubreddit"
              value={searchTextSubreddit}
              onChange={handleTextChange}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setSubreddit();
                }
              }}
            />
            <button
              className="search-box-btn"
              type="button"
              name="addSubreddit"
              onClick={setSubreddit}
            >
              Go To Subreddit
            </button>
          </div>
          <div className="search-box-container">
            <input
              className="search-box"
              type="text"
              name="searchTextTag"
              value={searchTextTag}
              onChange={handleTextChange}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag();
                }
              }}
            />
            <button
              className="search-box-btn"
              type="button"
              name="addTag"
              onClick={addTag}
            >
              Add Tag
            </button>          
          </div>
        </div>
        {warning ? <div className="warning">{warning}</div> : null}
        <div className="select-container">
          Sort by:
          <select
            className="select"
            id="sort-select"
            name="sortBy"
            value={sortBy}
            onChange={handleSelectChange}
            disabled={tagsLength > 0 ? false : true}
          >
            <option value="relevance">Relevance</option>
            <option value="top">Top</option>
            <option value="new">New</option>
            <option value="comments">Comments</option>
          </select>
          Limit:
          <select
            className="select"
            id="limit-select"
            name="limit"
            value={limit}
            onChange={handleSelectChange}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
      </form>
    );
  }
}

export default SearchForm;
