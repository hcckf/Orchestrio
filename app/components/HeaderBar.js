import React from 'react';

export default class HeaderBar extends React.Component {
  render() {
    return (
      <div className="pageheader">
        <img className="headerlogo" src="images/header_logo.png" />
        <div className="headerback"><img className="headerpic" src={this.props.imageurl} /></div>
        <div className="headername">{this.props.user}</div>
      </div>
    );
  }
}