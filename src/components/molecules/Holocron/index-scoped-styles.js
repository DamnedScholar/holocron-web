import React, { Component } from 'react'

import styles from 'style-loader!css-loader?modules!./holocron.css'

export default class Holocron extends Component {
  render() {
    return (
      <div className={styles.environment}>
        <div className={styles.holocron}>
          <div className={styles.face}>
            <div className={styles.inner}>
              <div className={styles.corner + " " + styles.med + " " + styles.top}></div>
              <div className={styles.corner + " " + styles.med + " " + styles.left}></div>
              <div className={styles.corner + " " + styles.med + " " + styles.right}></div>
            </div>
            <div className={styles.base + " " + styles.border}></div>
            <div className={styles.base + " " + styles.inner}></div>
          </div>
          <div className={styles.face}>
            <div className={styles.inner}>
              <div className={styles.corner + " " + styles.large + " " + styles.top}>
                <div className={styles.inner + " " + styles.top}></div>
                <div className={styles.inner + " " + styles.mid + " " + styles.left}></div>
                <div className={styles.inner + " " + styles.mid + " " + styles.flip}></div>
                <div className={styles.inner + " " + styles.mid + " " + styles.right}></div>
                <div className={styles.inner + " " + styles.bottom}></div>
              </div>
              <div className={styles.corner + " " + styles.med + " " + styles.left}></div>
              <div className={styles.corner + " " + styles.med + " " + styles.right}></div>
              <div className={styles.line + " " + styles.bottom}></div>
              <div className={styles.line + " " + styles.left}></div>
              <div className={styles.line + " " + styles.right}></div>
            </div>
          </div>
          <div className={styles.face}>
            <div className={styles.inner}>
              <div className={styles.corner + " " + styles.large + " " + styles.top}>
                <div className={styles.inner + " " + styles.top}></div>
                <div className={styles.inner + " " + styles.mid + " " + styles.left}></div>
                <div className={styles.inner + " " + styles.mid + " " + styles.flip}></div>
                <div className={styles.inner + " " + styles.mid + " " + styles.right}></div>
                <div className={styles.inner + " " + styles.bottom}></div>
              </div>
              <div className={styles.corner + " " + styles.med + " " + styles.left}></div>
              <div className={styles.corner + " " + styles.med + " " + styles.right}></div>
              <div className={styles.line + " " + styles.bottom}></div>
              <div className={styles.line + " " + styles.left}></div>
              <div className={styles.line + " " + styles.right}></div>
            </div>
          </div>
          <div className={styles.face}>
            <div className={styles.inner}>
              <div className={styles.corner + " " + styles.large + " " + styles.top}>
                <div className={styles.inner + " " + styles.top}></div>
                <div className={styles.inner + " " + styles.mid + " " + styles.left}></div>
                <div className={styles.inner + " " + styles.mid + " " + styles.flip}></div>
                <div className={styles.inner + " " + styles.mid + " " + styles.right}></div>
                <div className={styles.inner + " " + styles.bottom}></div>
              </div>
              <div className={styles.corner + " " + styles.med + " " + styles.left}></div>
              <div className={styles.corner + " " + styles.med + " " + styles.right}></div>
              <div className={styles.line + " " + styles.bottom}></div>
              <div className={styles.line + " " + styles.left}></div>
              <div className={styles.line + " " + styles.right}></div>
            </div>
          </div>
          <div className={styles.light}>
            <div className={styles.face}></div>
            <div className={styles.face}></div>
            <div className={styles.face}></div>
            <div className={styles.face}></div>
          </div>
        </div>
      </div>
    )
  }
}
