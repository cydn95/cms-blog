import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import AppBar  from 'material-ui/AppBar'
import AvWeb from 'material-ui/svg-icons/av/web';
import ActionDescription from 'material-ui/svg-icons/action/description';
import SocialPerson from 'material-ui/svg-icons/social/person';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import IconButton from 'material-ui/IconButton';
import { signOut } from '../../actions/auths';
import config from 'shared/config';


const inlineStyles = {
  appBar: {
    backgroundColor: '#fff',
    height: 50,
    minHeight: 50
  },
  title: {
    color: '#00796B',
    fontSize: '1.6rem',
    fontFamily: 'Raleway,sans-serif',
    lineHeight: '5.0rem',
    cursor: 'pointer'
  },
  elementRight: {
    height: 50,
    minHeight: 50,
    marginTop: 0
  }
};

class NavigationBar extends Component {

  constructor(props) {
    super(props);
    this.handleHome = this.handleHome.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };


  handleHome() {
    this.context.router.push('/cms');
  }

  handleSignOut(){
    this.props.signOut();
  }

  render() {
    return (
      <AppBar
        showMenuIconButton={false}
        title={config.authorName}
        style={inlineStyles.appBar}
        titleStyle={inlineStyles.title}
        onTitleTouchTap={this.handleHome}
        iconStyleRight={inlineStyles.elementRight}
        iconElementRight={
                    <div>
                        <Link to="/cms/about" >
                            <IconButton>
                                <SocialPerson />
                            </IconButton>
                        </Link>
                        <Link to="/cms/posts" >
                            <IconButton>
                                <ActionDescription />
                            </IconButton>
                        </Link>
                        <Link to="/cms/projects" >
                            <IconButton>
                                <AvWeb />
                            </IconButton>
                        </Link>
                        <a href={config.gitHubUrl} >
                            <IconButton iconClassName="muidocs-icon-custom-github"/>
                        </a>
                        <IconButton name="signOut" onClick={this.handleSignOut}>
                            <ExitToApp />
                        </IconButton>
                    </div>
                    }
      />

    );
  }
}
;

export default connect(null, { signOut })(NavigationBar);
