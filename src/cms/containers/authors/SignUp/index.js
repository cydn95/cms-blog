import React, { Component, PropTypes } from 'react';
import { signUp } from '../../../actions/auths';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ErrorMessage from '../../../components/shared/ErrorMessage/index';
import styles from './styles.scss';


const propTypes = {
  fields: PropTypes.object.isRequired,
  signUp: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

const inlineStyles = {
  submitButton: {
    position: 'absolute',
    bottom: 10,
    right: 15
  },
  indicator: {
    display: 'inline-block',
    position: 'relative'
  }
};

class AuthorSignUp extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if(this.props.authenticated) {
      this.context.router.push('/cms')
    }
  }

  handleSubmit(props) {
    this.props.signUp({ author: props })
  }

  renderError() {
    if (this.props.errorMessage) {
      return <span className={styles.error}>{this.props.errorMessage}</span>
    }
  }

  renderErrorMessage() {
    if(this.props.errorMessage) {
      return <ErrorMessage message={this.props.errorMessage} />
    }
  }

  render() {
    const { handleSubmit, fields: { name, password, passwordConfirmation, email } }  = this.props;
    return(
      <form onSubmit={handleSubmit(this.handleSubmit)} className={styles.root}>
        <h2 className={styles.heading}>Sign Up</h2>
        <TextField
        {...name}
        hintText="Enter Your Name"
        fullWIdth={true}
        errorText={name.touched && name.error ? name.error : ''}
        />
        <TextField
          {...email}
          hintText="Enter Your Email"
          type="email"
          fullWIdth={true}
          errorText={email.touched && email.error ? email.error : ''}
        />
        <TextField
          {...password}
          hintText="Enter password"
          type="password"
          fullWIdth={true}
          errorText={password.touched && password.error ? password.error : ''}
        />
        <TextField
          {...passwordConfirmation}
          hintText="Enter password confirmation"
          type="password"
          fullWIdth={true}
          errorText={passwordConfirmation.touched && passwordConfirmation.error ? passwordConfirmation.error : ''}
        />
        {this.renderErrorMessage()}
        <RaisedButton
          type="submit"
          label="SignUp"
          secondary={true}
          style={inlineStyles.submitButton}
        />
    </form>)
  }
};

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter your name'
  }

  if(!values.password || values.password.length < 6) {
    errors.password = 'Enter Password with more than 6 characters'
  }

  if(values.passwordConfirmation !== values.password) {
    errors.passwordConfirmation = 'PasswordConfirmation is different from Password'
  }

  if(!values.email) {
    errors.email = 'Enter Your Email'
  }

  return errors;
}
export const fields = [
  'name', 'email', 'password', 'passwordConfirmation'
];

function mapStateToProps(state) {
  return {
    authenticated: state.auths.authenticated,
    errorMessage: state.auths.errorMessage
  }
}

AuthorSignUp.propTypes = propTypes;


export default reduxForm({
  form: 'SignUp',
  fields,
  validate
}, mapStateToProps, { signUp })(AuthorSignUp);
