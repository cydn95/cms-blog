import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';

export default class Link extends Component {

  constructor(props) {
    super(...props);
  }

  render() {
    return (
      <div className={styles.root}>
        <a
          className={styles.title}
          href={this.props.sourceURL}
          target="_blank"
        >
          {this.props.sourceTitle}
        </a>
      </div>
    );
  }
}

Link.propTypes = {
  sourceURL: PropTypes.string.isRequired,
  sourceTitle: PropTypes.string.isRequired
};


