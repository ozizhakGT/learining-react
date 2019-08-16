import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';


class App extends React.Component {


    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Route path="/" exact component={StreamList} />
                        <Route path="/stream/new" exact component={StreamCreate} />
                        <Route path="/stream/edit/:id" exact component={StreamEdit} />
                        <Route path="/stream/delete/:id" exact component={StreamDelete} />
                        <Route path="/stream/show/:id" exact component={StreamShow} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;