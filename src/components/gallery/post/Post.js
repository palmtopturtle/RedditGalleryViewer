import React, { Component } from "react";
import reactHtmlParser from "react-html-parser";
import styles from "./post.module.scss";

const SPANMIN = 11,
  SPANMAX = 13;

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      span: Math.floor(Math.random() * (SPANMAX - SPANMIN + 1)) + SPANMIN,
      width: 0,
      height: 0
    };
  }

  /**
   * Get width and height of tile when component mounts.
   */
  componentDidMount() {
    let dimensions = this.gridItem.getBoundingClientRect();
    this.setState({ width: dimensions.width, height: dimensions.height });
  }

  /**
   * Loop through the preview images and find one where the width and height are greater than the tile's.
   * If none are found, just use the original image instead.
   */
  getValidPreview = () => {
    let preview = this.props.post.preview.images[0].resolutions.find(item => {
      return item.width >= this.state.width && item.height >= this.state.height;
    });

    return preview ? preview : this.props.post.preview.images[0].source;
  };

  /**
   * Returns a string truncated to the specified character limit. Keeps words intact.
   * @param {string} text
   * @param {number} charLimit
   */
  truncateText = (text, charLimit) => {
    let truncated = text.indexOf(" ", charLimit);
    if (truncated === -1) return text;
    return text.substring(0, truncated) + " ...";
  };

  /**
   * Outputs the main body. Differs depending on whether a preview is detected.
   */
  renderBody = () => {
    const { post } = this.props;

    return (
      <div className={styles.body}>
        {post.preview ? (
          <a
            className={styles["post-image"]}
            href={post.url}
            target="_blank noopener noreferrer"
          >
            <img src={this.getValidPreview().url} alt={post.title} />
          </a>
        ) : (
          <div className={styles.selftext}>
            {reactHtmlParser(post.selftext_html)}
          </div>
        )}
      </div>
    );
  };

  /**
   * Outputs the title.
   */
  renderTitle = () => {
    const { post } = this.props;

    return (
      <a
        className={styles.title}
        href={`https://reddit.com${post.permalink}`}
        target="_blank noopener noreferrer"
      >
        <h3>{this.truncateText(post.title, 100)}</h3>
      </a>
    );
  };

  /**
   * Outputs the meta data relevant to the post.
   * * subreddit
   * * author
   * * date
   * * score
   * * comments
   */
  renderMeta = () => {
    const { post } = this.props;
    let localDate = new Date(post.created_utc * 1000);

    return (
      <div className={styles["post-meta"]}>
        <a
          href={`https://reddit.com/r/${post.subreddit}`}
          target="_blank noopener noreferrer"
        >
          r/{post.subreddit}
        </a>{" "}
        - posted by {post.author} on {localDate.toLocaleDateString()} -{" "}
        {post.score} points -{" "}
        <a
          href={`https://reddit.com${post.permalink}`}
          target="_blank noopener noreferrer"
        >
          {post.num_comments} comments
        </a>
      </div>
    );
  };

  render() {
    return (
      <div
        ref={gridItem => (this.gridItem = gridItem)}
        className={styles.post}
        style={{ gridRowEnd: `span ${this.state.span}` }}
      >
        {this.renderBody()}
        <div className={styles["post-info"]}>
          <div className={styles.padding}>
            {this.renderTitle()}
            {this.renderMeta()}
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
