import React, { Component } from "react";
import SearchInput from "./searchinput/SearchInput";
import styles from "./searchform.module.scss";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: "",
      limit: 25
    };
  }

  /**
   * Ensures that the visual state of the select input matches what is passed through updateSelect.
   * @param {event} e
   */
  handleSelectChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.updateSelect(e);
  };

  /**
   * Outputs the select inputs for post limiting and sorting.
   */
  renderSelects = () => {
    const { tagsLength } = this.props;
    return (
      <div className={styles["select-container"]}>
        Sort by:
        <select
          className={styles.select}
          name="sortBy"
          value={this.state.sortBy}
          onChange={this.handleSelectChange}
          disabled={tagsLength > 0 ? false : true}
        >
          <option value="relevance">Relevance</option>
          <option value="top">Top</option>
          <option value="new">New</option>
          <option value="comments">Comments</option>
        </select>
        Limit:
        <select
          className={styles.select}
          name="limit"
          value={this.state.limit}
          onChange={this.handleSelectChange}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
    );
  };

  render() {
    const { addTag, setSubreddit, subreddit, warning } = this.props;
    return (
      <form className={styles["search-form"]}>
        <div className={styles["input-container"]}>
          <SearchInput submitData={setSubreddit}>Go To Subreddit</SearchInput>
          <SearchInput submitData={addTag}>Add Tag</SearchInput>
        </div>
        {warning ? <div className={styles.warning}>{warning}</div> : null}
        <div className={styles.subreddit}>Currently browsing: <span>{subreddit ? subreddit : "Frontpage"}</span></div>
        {this.renderSelects()}
      </form>
    );
  }
}

export default SearchForm;
