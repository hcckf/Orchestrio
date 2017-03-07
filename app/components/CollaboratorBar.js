import React from 'react';
import Collaborator from './Collaborator'
import Button from './Button'

export default class CollaboratorBar extends React.Component {
  render() {
		var collaborators = this.props.collaborators.map(function(collaborator) {
			return <Collaborator imageurl={collaborator.imageurl} />
		}
	)
    return (
      <div className="collaboratorbar">{this.props.songname}
      	<span className="left margin" ><Button text="back"  directFunction={() => alert("Clicked back button")} /></span>
				{collaborators}
				<span className="right margin" ><Button text="add collaborator"  directFunction={() => alert("Collaborator added")} /></span>
      </div>
    );
  }
}
