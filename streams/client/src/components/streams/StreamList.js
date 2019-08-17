import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }
    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/stream/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/stream/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }
    renderCreate() {
        if(this.props.isloggedIn) {
            return (
                <Link to='/stream/new' className="ui button green">Create Stream</Link>
            )
        }
    }
    renderList() {
        return this.props.streams.map(stream => {
            return (
              <div className="item" key={stream.id}>
                  {this.renderAdmin(stream)}
                  <i className="large middle aligned icon camera" />
                  <div className="content">
                  <span className="header">{stream.title}</span>
                  <div className="description">{stream.description}</div> 
                  </div>
              </div>  
            )
        })
    }

    render(){
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                 {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {streams: Object.values(state.streams), currentUserId: state.auth.userId, isloggedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);