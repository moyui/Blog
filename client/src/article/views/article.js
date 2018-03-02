import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Articles extends React.Component {
  constructors() {
    super(...arguments);
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
        <title>标题</title>
        <p>....</p>
        <button><Link>上一篇</Link></button>
        <button><Link>下一篇</Link></button>
      </div>
    );
  }
}