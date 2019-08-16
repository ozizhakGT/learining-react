import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
    componentDidMount() {
        if(!this.props.stream) {
            this.props.fetchStream(this.props.match.params.id)
        }
    }
    onSubmit = (values) => {
        console.log(values);
        this.props.editStream(this.props.stream.id, values)
    }
    render(){
        return <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit} />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);