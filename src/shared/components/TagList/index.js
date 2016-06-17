import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import LabelOutline from 'material-ui/svg-icons/action/label-outline';
import styles from './styles.scss';

const propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  path: PropTypes.string.isRequired
};


const inlineStyles ={
  tagIcon: {
    marginLeft: 0,
    width: 18,
    height: 18
  }
};

class TagList extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className={styles.root} >
        <LabelOutline color='#00AB6B' style={inlineStyles.tagIcon}/>
        {this.props.tags.map((tag) => {
          return (
            <Link key={tag.id} to={`/${this.props.path}?tag=${tag.id}`} className={styles.item}>
              <span className={styles.tagName}>{tag.name}</span>
            </Link>
          )})}
      </div>
    );
  }
}

TagList.propTYpes = propTypes;

export default TagList;