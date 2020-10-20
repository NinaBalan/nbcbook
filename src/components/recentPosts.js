import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts__wrapper">
                    <div className="recent-posts__heading">Recent Posts</div>
                    <ul className="recent-posts__posts">
                        <li>recent recipe 0</li>
                        <li>recent recipe  1</li>
                        <li>recent recipe  2</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default SearchBar;