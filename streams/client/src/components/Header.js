import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../services/GoogleAuth';


class Header extends React.Component {

    render() {
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="active item">
                    StreaMe
                </Link>
                <Link to="stream/new" className="item">
                    New
                </Link>
                <div className="right menu">
                <GoogleAuth />
                 </div>
                </div>
        )
    }
}

export default Header;