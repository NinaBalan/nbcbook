import React, { Component } from 'react';

import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";
import Slider from './slider';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Logo/>
        </div>
        
        <h1>My recipes</h1>
        <div></div>
        <SearchBar/>
        
        <Slider/>
      </div>
    );
  }
}
