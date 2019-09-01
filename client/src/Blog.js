import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { view as NavBar} from './nav-bar/';
import { view as SideMenu } from './side-menu/';
import { view as ArticleItems } from './article-items/';
import { view as ArticleInfo } from './article-info/';
import { view as NotFound } from './not-found/';
import { view as Archive } from './archive/';

import brand from './image/brand.jpg';

class Blog extends React.Component {
  constructor() {
    super(...arguments);

    this.refBrand = this.refBrand.bind(this);
    this.refFixedSideBar = this.refFixedSideBar.bind(this);
    this.fixSideBar = this.fixSideBar.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.fixSideBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.fixSideBar);
  }

  fixSideBar(event) {
    const sideBar = this.sideBarDom;
    const brand = this.brandDom;
    
    const brandBottom = brand.getBoundingClientRect().bottom;

    if (brandBottom <= 0) {
      sideBar.className = 'fix-fuel side-bar-fixed';
    } else  {
      sideBar.className = 'fix-fuel';
    }
  }

  refBrand(node) {
    this.brandDom = node;
  }

  refFixedSideBar(node) {
    this.sideBarDom = node
  }

  render() {
    const classPerfix = 'root';

    return (
        <React.Fragment>
        <NavBar key={`${classPerfix}-navbar`}/>
        <div key={`${classPerfix}-brand`} className="brand" ref={this.refBrand}>
          <img className="brand-img" src={brand} />
        </div>

        <div key={`${classPerfix}-body`} className="body">
            <div className="side-bar-wrap"> 
            <div className="fix-fuel" ref={this.refFixedSideBar}>
              <SideMenu />
            </div>
            </div>
          <div className="main-body-wrap">
            <Switch>
              <Route exact path="/" component={ArticleItems} />
              <Route path="/home" component={ArticleItems} />
              <Route path="/articleinfo/:id" component={ArticleInfo} />
              <Route path="/archive" component={Archive} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
        <footer>
        </footer>
      </React.Fragment>
    )
  }
}

export default hot(module)(Blog);