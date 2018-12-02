import React, { Component } from "react";
import styles from "./searchinput.module.scss";

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  /**
   * Grabs data from text input and updates the state.
   * @param {event} e
   */
  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    //Props determine whether the subreddit or tags are updated.
    const { submitData } = this.props;
    return (
      <div className={styles.search}>
        <input
          className={styles.box}
          type="text"
          name="value"
          value={this.state.value}
          onChange={this.handleTextChange}
          onKeyPress={e => {
            if (e.key === "Enter") {
              e.preventDefault();
              submitData(this.state.value);
              this.setState({ value: "" });
            }
          }}
        />
        <button
          className={styles["btn-add"]}
          type="button"
          onClick={() => {
            submitData(this.state.value);
            this.setState({ value: "" });
          }}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default SearchInput;
