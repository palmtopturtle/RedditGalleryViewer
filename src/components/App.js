import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./searchform/SearchForm";
import Gallery from "./gallery/Gallery";
import TagsDisplay from "./tagsdisplay/TagsDisplay";
import Footer from "./footer/Footer";
import Logo from "./logo/Logo";
import "./app.module.scss";

const BASE_URL = "https://www.reddit.com/";

//Used for reloading posts when inputs are updated.
const defaultState = {
  posts: [],
  after: "",
  reachedEnd: false,
  error: null,
  warning: ""
};

class Search extends Component {
  constructor() {
    super();
    this.state = {
      subreddit: "",
      sortBy: "relevance",
      limit: 25,
      after: "",
      tags: [],
      posts: [],
      reachedEnd: false,
      isLoading: false,
      error: null,
      warning: ""
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  resetDefaultState() {
    this.setState(defaultState);
  }

  /**
   * Appends a tag to the current array and updates the posts.
   * @param {string} newTag
   */
  addTag = newTag => {
    if (!newTag) {
      this.setState({ warning: "Please enter some text first!" });
    } else if (this.state.tags.includes(newTag)) {
      this.setState({ warning: "Duplicate tag detected!" });
    } else {
      this.resetDefaultState();
      this.setState({ tags: [...this.state.tags, newTag] }, this.fetchPosts);
    }
  };

  /**
   * Removes a tag from the current array and updates the posts.
   * @param {string} tagToDelete
   */
  deleteTag = tagToDelete => {
    this.resetDefaultState();
    this.setState(
      { tags: this.state.tags.filter(tag => tag !== tagToDelete) },
      this.fetchPosts
    );
  };

  /**
   * Changes the current subreddit and updates the posts.
   * A blank subreddit returns to the frontpage.
   * @param {string} newSubreddit
   */
  setSubreddit = newSubreddit => {
    this.resetDefaultState();
    this.setState(
      { subreddit: newSubreddit ? "r/" + newSubreddit + "/" : "" },
      this.fetchPosts
    );
  };

  /**
   * Updates either the post limit per load or how the posts are sorted, and then updates the posts.
   * @param {event} e
   */
  updateSelect = e => {
    this.resetDefaultState();
    this.setState({ [e.target.name]: e.target.value }, this.fetchPosts);
  };

  /**
   * Fetches posts from reddit. What posts are fetched depends on the current subreddit and tags.
   * The "after" property from the JSON is for pagination.
   */
  fetchPosts = () => {
    this.setState({ isLoading: true });
    axios
      .get(this.outputUrl())
      .then(res => {
        let newPosts = res.data.data.children.map(data => data.data),
          after = res.data.data.after;

        this.setState({
          posts: this.state.posts.concat(newPosts),
          after,
          isLoading: false,
          reachedEnd: !after ? true : false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  /**
   * Builds the URL string for fetching data from the Reddit API.
   * If there are no tags, it just uses the "hot" category.
   */
  outputUrl = () => {
    let urlStart = BASE_URL + this.state.subreddit;

    if (this.state.tags.length > 0) {
      return `${urlStart}search.json?q=${this.outputTags()}&limit=${
        this.state.limit
      }&sort=${this.state.sortBy}&restrict_sr=on&raw_json=1&after=${
        this.state.after
      }`;
    }

    return `${urlStart}hot.json?limit=${
      this.state.limit
    }&restrict_sr=on&raw_json=1&after=${this.state.after}`;
  };

  /**
   * Outputs the current tags for use in the API URL.
   */
  outputTags = () => {
    return this.state.tags.join("+");
  };

  render() {
    return (
      <div>
        <Logo />
        <SearchForm
          updateSelect={this.updateSelect}
          tagsLength={this.state.tags.length}
          addTag={this.addTag}
          setSubreddit={this.setSubreddit}
          subreddit={this.state.subreddit}
          warning={this.state.warning}
        />
        <TagsDisplay tags={this.state.tags} deleteTag={this.deleteTag} />
        <Gallery posts={this.state.posts} />
        <Footer
          isLoading={this.state.isLoading}
          error={this.state.error}
          reachedEnd={this.state.reachedEnd}
          fetchPosts={this.fetchPosts}
        />
      </div>
    );
  }
}

export default Search;
