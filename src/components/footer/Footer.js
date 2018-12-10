import React, { Component } from "react";
import styles from "./footer.module.scss";
import Loader from "./loader/Loader"

class Footer extends Component {
  /**
   * Handles errors when fetching data, if any occur.
   */
  renderError = () => {
    const { error } = this.props;
    if (error.message === "Network Error" || error.response.status === 404) {
      return (
        <h2>
          Error: 404 not found! Did you type the subreddit name correctly?
        </h2>
      );
    } else {
      return <h2>An error occured while fetching data! Is reddit.com down?</h2>;
    }
  };

  /**
   * Displays different information depending on the props.
   * * isLoading ? shows "Loading..." animation
   * * reachedEnd ? informs the user that there are no more posts to load
   * * error ? runs through error handling
   * * else, displays "Load More" button
   */
  renderFooter = () => {
    const { isLoading, error, reachedEnd, fetchPosts } = this.props;
    if (isLoading) {
      return <Loader />;
    } else if (reachedEnd) {
      return <h2>Reached end!</h2>;
    } else if (error) {
      return this.renderError();
    } else {
      return (
        <button
          className={styles.btn}
          type="button"
          name="loadMore"
          onClick={fetchPosts}
        >
          Load More
        </button>
      );
    }
  };

  render() {
    return <div className={styles.footer}>{this.renderFooter()}</div>;
  }
}

export default Footer;
