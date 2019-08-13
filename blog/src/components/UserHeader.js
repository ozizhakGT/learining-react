import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render() {
        const {user} = this.props;
        if(!user) {
            return null
        }
        return <p className="header">Username: {user.name}</p>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(u => u.id === ownProps.userId)}
}

export default connect(mapStateToProps)(UserHeader)