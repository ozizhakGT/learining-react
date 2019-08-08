import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Lets hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it is chilly",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summner';
    }
};

const SeassonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`seasonDisplay ${season}`}>
        <i className={`icon-left ${iconName} icon massive`}></i>
        <h1 className="title">{text}</h1>
        <i className={`icon-right ${iconName} icon massive`}></i>
        </div>
    );
};


export default SeassonDisplay;