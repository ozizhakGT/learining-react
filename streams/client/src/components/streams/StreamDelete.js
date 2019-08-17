import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
    componentDidMount() {
        if(!this.props.stream) {
            this.props.fetchStream(this.props.match.params.id)
        }
    }
    actions() {
        const {id} = this.props.match.params;
        return (
            <React.Fragment>
                <Link to="/" className="ui button negative">No</Link>
                <button onClick={() => this.props.deleteStream(id)} className="ui button primary">Yes</button>
            </React.Fragment>
        )
    }

    onDismiss() {
        history.push('/');
    }
    renderContent() {
        if(!this.props.stream) {
            return `Are you sure you want to delete this stream?`
        } else {
            return `Are you sure you want to delete this stream: ${this.props.stream.title}`
        }
    }
    render() {
        return (
            <div>
            <Modal 
            title='Delete Stream'
            content={this.renderContent()}
            actions={this.actions()}
            onDismiss={this.onDismiss}
            />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]} 
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);