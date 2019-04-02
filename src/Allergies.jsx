import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import './Allergies.css';
import Markdown from './files/allergies.md';

class Allergies extends Component {
  constructor() {
    super();
    this.state = {
      markdown: null,
    };
  }

  componentWillMount() {
    fetch(Markdown)
      .then(res => res.text())
      .then(raw => this.setState({
        markdown: raw,
      }));
  }

  render() {
    const { markdown } = this.state;
    return (
      <ReactMarkdown
        source={markdown}
        escapeHtml={false}
        className="markdown"
      />
    );
  }
}

export default Allergies;
