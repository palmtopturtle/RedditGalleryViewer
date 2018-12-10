import React from "react";
import { Transition } from "react-spring";
import styles from "./loader.module.scss";

const Loader = () => {
  const squares = [
    { text: "Lo", key: 1 },
    { text: "ad", key: 2 },
    { text: "in", key: 3 },
    { text: "g...", key: 4 }
  ];

  return (
    <Transition
      items={squares}
      keys={item => item.key}
      trail={30}
      from={{ transform: "rotateY(0deg)", opacity: 0 }}
      enter={{ transform: "rotateY(360deg)", opacity: 1 }}
    >
      {item => props => (
        <div style={props} className={styles.square}>
          <span>{item.text}</span>
        </div>
      )}
    </Transition>
  );
};

export default Loader;
