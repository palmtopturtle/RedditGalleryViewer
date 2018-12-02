import React, { Component } from "react";
import styles from "./tagsdisplay.module.scss";

class TagsDisplay extends Component {
  renderTags = () => {
    const { tags, deleteTag } = this.props;

    return tags.map(tag => (
      <div className={styles.tag} key={tag}>
        {tag}{" "}
        <i className="material-icons" onClick={() => deleteTag(tag)}>
          remove_circle
        </i>
      </div>
    ));
  };

  render() {
    const { tags } = this.props;
    
    return (
      <div className={styles["tags-container"]}>
        {tags ? this.renderTags() : null}
      </div>
    );
  }
}

export default TagsDisplay;
