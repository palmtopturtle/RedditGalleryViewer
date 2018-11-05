import React, { Component } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";
import TagsDisplay from "./TagsDisplay";
import "../App.css";

const BASE_URL = "https://www.reddit.com/";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      subreddit: "",
      sortBy: "relevance",
      limit: 25,
      after: "",
      tags: [],
      searchTextSubreddit: "",
      searchTextTag: "",
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

  addTag = () => {
    let newTag = this.state.searchTextTag;

    if (!newTag) {
      this.setState({ warning: "Please enter some text first!" });
    } else if (this.state.tags.includes(newTag)) {
      this.setState({ warning: "Duplicate tag detected!" });
    } else {
      this.setState(
        {
          tags: [...this.state.tags, newTag],
          searchTextTag: "",
          posts: [],
          after: "",
          reachedEnd: false,
          error: null,
          warning: ""
        },
        this.fetchPosts
      );
    }
  };

  setSubreddit = () => {
    let newSubreddit = this.state.searchTextSubreddit;

    if (!newSubreddit) {
      this.setState({ warning: "Please enter some text first!" });
    } else {
      this.setState(
        {
          subreddit: "r/" + newSubreddit + "/",
          searchTextSubreddit: "",
          posts: [],
          after: "",
          reachedEnd: false,
          error: null,
          warning: ""
        },
        this.fetchPosts
      );
    }
  };

  resetSubreddit = () => {
    this.setState(
      {
        subreddit: "",
        posts: [],
        after: "",
        reachedEnd: false,
        error: null,
        warning: ""
      },
      this.fetchPosts
    );
  };

  deleteTag = tagToDelete => {
    this.setState(
      {
        tags: this.state.tags.filter(tag => tag !== tagToDelete),
        posts: [],
        after: "",
        reachedEnd: false,
        error: null,
        warning: ""
      },
      this.fetchPosts
    );
  };

  fetchPosts = () => {
    this.setState({ isLoading: true });
    if (this.state.tags.length > 0) {
      axios
        .get(
          `${BASE_URL}${
            this.state.subreddit
          }search.json?q=${this.outputTags()}&limit=${this.state.limit}&sort=${
            this.state.sortBy
          }&restrict_sr=on&raw_json=1&after=${this.state.after}`
        )
        .then(res => {
          let newPosts = res.data.data.children.map(data => data.data);
          let posts = this.state.posts.concat(newPosts);
          let after = res.data.data.after;
          if (newPosts.length < this.state.limit)
            this.setState({ reachedEnd: true });
          this.setState({ posts, after, isLoading: false });
        })
        .catch(error => this.setState({ error, isLoading: false }));
    } else {
      axios
        .get(
          `${BASE_URL}${this.state.subreddit}hot.json?limit=${
            this.state.limit
          }&restrict_sr=on&raw_json=1&after=${this.state.after}`
        )
        .then(res => {
          let newPosts = res.data.data.children.map(data => data.data);
          let posts = this.state.posts.concat(newPosts);
          let after = res.data.data.after;
          if (newPosts.length < this.state.limit)
            this.setState({ reachedEnd: true });
          this.setState({ posts, after, isLoading: false });
        })
        .catch(error => this.setState({ error, isLoading: false }));
    }
  };

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value, warning: "" });
  };

  handleSelectChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        posts: [],
        after: "",
        reachedEnd: false,
        error: null,
        warning: ""
      },
      this.fetchPosts
    );
  };

  handleError = () => {
    if (
      this.state.error.message === "Network Error" ||
      this.state.error.response.status === 404
    ) {
      return "Error: 404 not found! Did you type the subreddit name correctly?";
    } else {
      return "An error occured while fetching data! Is reddit.com down?";
    }
  };

  outputTags = () => {
    return this.state.tags.join("+");
  };

  render() {
    return (
      <div className="app">
        <h1 className="header">
          Reddit Gallery View - {this.state.subreddit ? this.state.subreddit : "Frontpage"} 
        </h1>
        <SearchForm
          searchTextSubreddit={this.state.searchTextSubreddit}
          searchTextTag={this.state.searchTextTag}
          sortBy={this.state.sortBy}
          limit={this.state.limit}
          tagsLength={this.state.tags.length}
          handleTextChange={this.handleTextChange}
          handleSelectChange={this.handleSelectChange}
          addTag={this.addTag}
          setSubreddit={this.setSubreddit}
          warning={this.state.warning}
          subreddit={this.state.subreddit}
          resetSubreddit={this.resetSubreddit}
        />
        <TagsDisplay tags={this.state.tags} deleteTag={this.deleteTag} />
        <Gallery posts={this.state.posts} />
        <div className="footer">
          {this.state.isLoading ? <h2 className="header">Loading...</h2> : null}
          {this.state.posts.length > 0 && !this.state.reachedEnd ? (
            <button
              id="load-btn"
              className="btn"
              type="button"
              name="loadMore"
              onClick={this.fetchPosts}
            >
              Load More
            </button>
          ) : null}
          {this.state.reachedEnd ? (
            <h2 className="header">Reached end!</h2>
          ) : null}
          {this.state.error ? (
            <h2 className="header">{this.handleError()}</h2>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Search;
