import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      preLocation: 0
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.refNavBar = this.refNavBar.bind(this); 
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const navBar = this.navBar;
    let req;

    const preLocation = this.state.preLocation;
    req = window.requestAnimationFrame(() => {
      const presentLocation = document.documentElement.scrollTop;
      const moveDistance = presentLocation - preLocation;
      if (moveDistance > 0) {
        navBar.style.visibility = "hidden";
      } else if (moveDistance < 0) {
        navBar.style.visibility = "visible";
      }

      this.setState({
        preLocation: presentLocation
      })
      window.cancelAnimationFrame(req);
    });
  }

  refNavBar(node) {
    this.navBar = node;
  }
  
  render() {
    return (
      <nav className="nav-bar" ref={this.refNavBar}>
        <ul className="nav-ul">
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/articleinfo">文章</Link></li>
          <li><Link to="/archive">归档</Link></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;