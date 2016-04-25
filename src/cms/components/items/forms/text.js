import React, { Component, PropTypes } from 'react';
import { capitalize } from '../../../utilities';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import ContentAddCircle from 'material-ui/lib/svg-icons/content/add-circle';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { reduxForm } from 'redux-form';

class ItemFormText extends Component {

  constructor(props) {
    super(...props);

    this.state = { style: props.style == '' ? 1 : props.style };
    
    this.handleChange     = this.handleChange.bind(this);
    this.handleUpdateItem = this.handleUpdateItem.bind(this);
  }

  handleUpdateItem(props) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!props.description) {
          reject({ description: 'description is empty' })
        } else {
          this.props.handleUpdateItem({ style: this.state.style, description: props.description });
          resolve();
        }
      }, 1000)
    })
  }
  
  handleChange(e) {
    this.setState({ style: event.value })
  }

  render() {
    const { handleSubmit, submitting, fields: { description } } = this.props;
    return (
      <div className="item-form">
        <div className="item-form__name">{capitalize(this.props.type)}</div>
        <SelectField value={this.state.style} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Never"/>
          <MenuItem value={2} primaryText="Every Night"/>
          <MenuItem value={3} primaryText="Weeknights"/>
          <MenuItem value={4} primaryText="Weekends"/>
          <MenuItem value={5} primaryText="Weekly"/>
        </SelectField>
        <TextField
          className="item-form__input-text"
          {...description}
          hintText='Enter the description'
          fullWidth={true}
          rows={4}
          errorText={description.touched && description.error ? description.error : ''}
        />
        <div className="item-form__submit-box">
          <RaisedButton
            label={this.props.submitButtonLabel}
            labelPosition="after"
            icon={<ContentAddCircle />}
            disabled={submitting}
            onClick={handleSubmit(this.handleUpdateItem)}
          />
          {this.props.cancelButton}
        </div>
      </div>
    );
  }
}

ItemFormText.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.number,
  description: PropTypes.string,
  submitButtonLabel: PropTypes.string.isRequired,
  cancelButton: PropTypes.object.isRequired,
  handleUpdateItem: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'ItemFormText',
  fields: ['description']
})(ItemFormText);
