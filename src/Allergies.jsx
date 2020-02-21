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

  componentDidMount() {
    // https://reactjs.org/docs/react-component.html#componentdidmount
    // "If you need to load data from a remote endpoint, this is a good place
    // to instantiate the network request."
    fetch(Markdown)
      .then(res => res.text())
      .then(raw => this.setState({
        markdown: raw,
      }));
  }

  render() {
    const { markdown } = this.state;

    if (markdown == null) {
      return null;
    }

    return (
      <div className="content">
        <Link to="/home" className="back">
          <FontAwesomeIcon icon="angle-left" className="icon" />
          home
        </Link>
        <div>
          <ReactMarkdown
            source={markdown}
            escapeHtml={false}
          />
        </div>
      </div>
    );
  }
}

export default Allergies;
