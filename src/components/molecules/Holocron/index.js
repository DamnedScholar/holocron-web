import React, { Component } from 'react'

import './holocron.css'

export default class Holocron extends Component {
  render() {
    return (
      <div className="environment">
        <div className="holocron">
          <div className="face">
            <div className="face-inner">
              <div className="corner med top"></div>
              <div className="corner med left"></div>
              <div className="corner med right"></div>
            </div>
            <div className="base border"></div>
            <div className="base inner"></div>
          </div>
          <div className="face">
            <div className="face-inner">
              <div className="corner large top">
                <div className="inner top"></div>
                <div className="inner mid left"></div>
                <div className="inner mid flip"></div>
                <div className="inner mid right"></div>
                <div className="inner bottom"></div>
              </div>
              <div className="corner med left"></div>
              <div className="corner med right"></div>
              <div className="line bottom"></div>
              <div className="line left"></div>
              <div className="line right"></div>
            </div>
          </div>
          <div className="face">
            <div className="face-inner">
              <div className="corner large top">
                <div className="inner top"></div>
                <div className="inner mid left"></div>
                <div className="inner mid flip"></div>
                <div className="inner mid right"></div>
                <div className="inner bottom"></div>
              </div>
              <div className="corner med left"></div>
              <div className="corner med right"></div>
              <div className="line bottom"></div>
              <div className="line left"></div>
              <div className="line right"></div>
            </div>
          </div>
          <div className="face">
            <div className="face-inner">
              <div className="corner large top">
                <div className="inner top"></div>
                <div className="inner mid left"></div>
                <div className="inner mid flip"></div>
                <div className="inner mid right"></div>
                <div className="inner bottom"></div>
              </div>
              <div className="corner med left"></div>
              <div className="corner med right"></div>
              <div className="line bottom"></div>
              <div className="line left"></div>
              <div className="line right"></div>
            </div>
          </div>
          <div className="light-source">
            <div className="face"></div>
            <div className="face"></div>
            <div className="face"></div>
            <div className="face"></div>
          </div>
        </div>
      </div>
    )
  }
}
