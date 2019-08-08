import './spinner.css';
import React from 'react';

const Spinner = (props) => {
    return (
        <section className="spinner">
            <div className="ui segment">
                 <div className="ui active dimmer">
                <div className="ui text loader">{props.massege}</div>
                </div>
                <p></p>
            </div>
        </section>
    )
}

Spinner.defaultProps = {
    massege: 'Loading...'
}

export default Spinner;