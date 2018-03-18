import React from 'react';
import { Link } from 'react-router-dom';
import TransitionGroup from 'react-addons-css-transition-group';

import { throttle } from '../../constant/throttle.js';

class NavBar extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      switchHide: false
    };

    this.handleWheel = throttle(this.handleWheel.bind(this));
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(nextState.switchHide === this.state.switchHide);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  }

  handleWheel(event) {
    console.log(event);
    const state = event.deltaY > 0 ? false : true;
    this.setState({
      switchHide: state
    });
  }

  render() {
    const navBarStyle = {
      'visibility': (this.state.switchHide) ? 'hidden' : 'visible'
    };

    return (
      <TransitionGroup transitionName="fade">
        <nav className="nav-bar" style={navBarStyle}>
          <ul className="nav-ul">
            <li><Link to="/home">首页</Link></li>
            <li><Link to="/articleinfo">文章</Link></li>
            <li><Link to="/archive">归档</Link></li>
          </ul>
        </nav>
      </TransitionGroup>
    )
  }
}

export default NavBar;