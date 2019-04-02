import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

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
      <div className="allergies">
        <Link to="/" className="back">
          <FontAwesomeIcon icon="angle-left" />
        </Link>
        <ReactMarkdown
          source={markdown}
          escapeHtml={false}
        />
      </div>
    );
  }
}

export default Allergies;
