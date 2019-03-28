import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import './Allergies.css';
import Markdown from './other/allergies.md';

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
      <div className="allergies">
        <ReactMarkdown
          source={markdown}
          escapeHtml={false}
          className="markdown"
        />
      </div>
    );
  }
}

export default Allergies;
