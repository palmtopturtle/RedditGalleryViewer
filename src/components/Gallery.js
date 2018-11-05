import React, { Component } from "react";
import Post from "./Post";
import "../App.css";

class Gallery extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="gallery">
        {posts.map(
          post =>
            !post.stickied ? (
              <Post
                key={posts.indexOf(post)}
                title={post.title}
                author={post.author}
                date={post.created_utc}
                url={post.url}
                permalink={post.permalink}
                imgs={post.preview ? post.preview.images[0] : null}
                selfText={post.selftext_html}
                score={post.score}
                numComments={post.num_comments}
                subreddit={post.subreddit}
              />
            ) : null
        )}
      </div>
    );
  }
}

export default Gallery;
