import React, { Component } from "react";
import reactHtmlParser from "react-html-parser";
import "../App.css";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postWidth: 0,
      postHeight: 0,
      preview: ""
    };
  }

  componentDidMount() {
    let postDivSizes = this.postDiv.getBoundingClientRect();
    if (this.props.imgs)
      this.setState(
        { postWidth: postDivSizes.width, postHeight: postDivSizes.height },
        this.getPostPreview
      );
  }

  getPostPreview = () => {
    let noValidPreview = true;
    this.props.imgs.resolutions.forEach(preview => {
      if (
        preview.width >= this.state.postWidth &&
        preview.height >= this.state.postHeight &&
        noValidPreview
      ) {
        this.setState({ preview: preview.url });
        noValidPreview = false;
      }
    });
    if (noValidPreview) this.setState({ preview: this.props.imgs.source.url });
  }

  truncateText = (text, charLimit) => {
    let truncated = text.indexOf(" ", charLimit);
    if (truncated === -1) return text;
    return text.substring(0, truncated) + " ...";
  };

  render() {
    const {
      title,
      author,
      date,
      url,
      permalink,
      score,
      numComments,
      selfText,
      subreddit
    } = this.props;

    let localDate = new Date(date * 1000);

    return (
      <div
        className="post"
        ref={postDiv => {
          this.postDiv = postDiv;
        }}
      >
        {this.state.preview ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={this.state.preview} alt={title} />
          </a>
        ) : (
          <div className="selftext-container">{reactHtmlParser(selfText)}</div>
        )}
        <div className="post-text-container">
          <h3 className="post-title">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
            >
              {this.truncateText(title, 100)}
            </a>
          </h3>
          <div className="post-info">
            r/
            {subreddit} | submitted by {author} on{" "}
            {localDate.toLocaleDateString()} - {score} points -{" "}
            <a
              href={`http://www.reddit.com${permalink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {numComments} comments
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
