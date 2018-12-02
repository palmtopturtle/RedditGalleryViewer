import React, { Component } from "react";
import Post from "./post/Post";
import styles from "./gallery.module.scss";

class Gallery extends Component {
  renderPosts = () => {
    const { posts } = this.props;

    return posts.map(post =>
      !post.stickied ? <Post key={posts.indexOf(post)} post={post} /> : null
    );
  };

  render() {
    return <div className={styles.gallery}>{this.renderPosts()}</div>;
  }
}

export default Gallery;
