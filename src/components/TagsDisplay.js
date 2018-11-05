import React, { Component } from "react";

class TagsDisplay extends Component {
  render() {
    const { tags, deleteTag } = this.props;
    return (
      <div className="tags-container">
        {tags
          ? tags.map(tag => (
              <div className="tag" key={tag}>
                {tag}{" "}
                <i
                  className="material-icons remove-btn"
                  onClick={() => deleteTag(tag)}
                >
                  remove_circle
                </i>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default TagsDisplay;
