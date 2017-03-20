import React from 'react';
import { Link } from 'react-router';

export default class Shell extends React.Component {
  render() {
    return (
      <div className="app-shell">
        <header>
          <Link to="/">
            <h3>English</h3>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
      </div>
    );
  }
}
