import React from "react";
import styles from "./logo.module.scss";
import { Trail, config } from "react-spring";

const Logo = () => {
  const squares = [
      { text: "Gall ery", key: 1 },
      { text: "", key: 2 },
      { text: "", key: 3 },
      { text: "Vie wer", key: 4 }
    ],
    title = [
      { letter: "R", key: 1 },
      { letter: "e", key: 2 },
      { letter: "d", key: 3 },
      { letter: "d", key: 4 },
      { letter: "i", key: 5 },
      { letter: "t", key: 6 }
    ];

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.start}>
          <Trail
            items={title}
            keys={item => item.key}
            config={config.stiff}
            from={{ transform: "translateX(-50px)", opacity: 0 }}
            to={{ transform: "translateX(0)", opacity: 1 }}
          >
            {item => props => <span style={props}>{item.letter}</span>}
          </Trail>
        </div>
        <div className={styles.empty} />
        <Trail
          items={squares}
          keys={item => item.key}
          delay={1100}
          config={config.slow}
          from={{ transform: "rotateY(0deg)", opacity: 0 }}
          to={{ transform: "rotateY(360deg)", opacity: 1 }}
        >
          {item => props => (
            <div style={props} className={styles.square}>
              {item.text ? <span>{item.text}</span> : null}
            </div>
          )}
        </Trail>
        <div className={styles.empty} />
      </div>
    </div>
  );
};

export default Logo;
