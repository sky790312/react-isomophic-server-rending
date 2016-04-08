import React from 'react';

export default class AppView extends React.Component {
  render() {
  	// the children will be the component tree that the router gives us
    return (
      <div id="app-view">
        <h1>Todos</h1>
        <hr />
        {this.props.children}
      </div>
    );
  }
}