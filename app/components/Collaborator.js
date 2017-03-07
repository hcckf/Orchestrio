import React from 'react';

export default class CollaboratorBar extends React.Component {
	render() {
    return (
      <div className="headerback"><img className="headerpic" src={this.props.imageurl} /></div>
    );
  }
}
