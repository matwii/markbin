import React, {Component} from 'react';
import Accounts from './accounts';
import {Link, browserHistory} from 'react-router';

class Header extends Component {
    constructor(){
        super()
    }

    onBinClick(event){
       event.preventDefault();
       Meteor.call('bins.insert', (error, bin) => {
           browserHistory.push(`/bins/${bin}`)
       });
    }

    render(){
        return (
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Markbin</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Accounts/>
                    </li>
                    <li>
                        <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;