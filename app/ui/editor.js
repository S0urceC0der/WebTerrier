import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';

export class Editor extends Component {
  constructor() {
    super()
  }

  render() {
    return
      <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />

  }
}
