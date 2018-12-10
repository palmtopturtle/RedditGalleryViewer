import React, { Component } from "react";
import Post from "./post/Post";
import styles from "./gallery.module.scss";

class Gallery extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className={styles.gallery}>
        {posts.map(post => (
          <Post key={posts.indexOf(post)} post={post} />
        ))}
      </div>
    );
  }
}

export default Gallery;
