import React from 'react';


class SearchBar extends React.Component {
    state = {terms: ''};

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onTest(this.state.terms);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                      <label>Image Search</label>
                      <div className="ui input">
                        <input 
                        type="text" 
                        placeholder="Search..." 
                        value={this.state.terms}
                        onChange={(e) => this.setState({terms: e.target.value})}/>
                      </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;