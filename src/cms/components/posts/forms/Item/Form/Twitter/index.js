import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ContentSave from 'material-ui/svg-icons/content/save';
import inlineStyles from 'shared/css/MaterialUI/index';
import styles from '../shared/styles';


const propTypes = {
  targetType: PropTypes.string.isRequired,
  sortRank: PropTypes.number.isRequired,
  twitterId: PropTypes.string,
  cancelButton: PropTypes.object,
  deleteButton: PropTypes.object.isRequired,
  handleUpdateItem: PropTypes.func.isRequired,
  handleSubmitItem: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const fields = ['twitterId'];

function validate(values) {
  const errors = {};

  if (!/https?:\/\/twitter.com\/[\w]+\/status\/[\d]+$/ig.test(values.twitterId) && !/[\d]+$/ig.test(values.twitterId)) {
    errors.twitterId = 'Enter Valid Twitter URL or Twitter ID';
  }

  return errors;
}


class Twitter extends Component {

  constructor(props) {
    super(props);
    this.handleUpdateItem = this.handleUpdateItem.bind(this);
  }

  handleUpdateItem(props) {
    const regexp = /https?:\/\/twitter.com\/[\w]+\/status\/([\d]+)$/i;
    const twitterId = props.twitterId.match(regexp) ? props.twitterId.match(regexp)[1] : props.twitterId;
    this.props.handleUpdateItem({ twitterId });
  }


  render() {
    const { handleSubmit, submitting, fields: { twitterId } } = this.props;
    return (
      <div className={styles.root}>
        <TextField
          {...twitterId}
          floatingLabelText="Twitter"
          hintText="Enter the twitter URL or ID"
          fullWidth
          errorText={twitterId.touched && twitterId.error ? twitterId.error : ''}
        />
        <div className={styles.submitBox} >
          {this.props.cancelButton}
          {this.props.deleteButton}
          <IconButton
            disabled={submitting}
            tooltip="Save"
            tooltipPosition="bottom-center"
            name="save-item-button"
            disableTouchRipple={true}
            onClick={handleSubmit(this.handleUpdateItem)}
          >
            <ContentSave color={inlineStyles.iconColor} />
          </IconButton>
        </div>
      </div>
    );
  }
}

Twitter.propTypes = propTypes;

export default reduxForm({
  form: 'ItemFormTwitter',
  fields,
  validate,
})(Twitter);

