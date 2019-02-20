import "./SeasonDisplay.css";
import React, { Component } from 'react';

class SeasonDisplay extends Component {
    seasonConfig = {
        summer: {
            text: "Lets hit the Beach!",
            iconName: 'sun'
        },
        winter: {
            text: "Burr it is Cold!",
            iconName: "snowflake"
        }
    };
    getSeason = (lat, month) => {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'summer' : 'winter';
        }
        else {
            return lat > 0 ? 'winter' : 'summer';
        }
    };
    render() {
        const season = this.getSeason(this.props.lat, new Date().getMonth());
        const { text, iconName } = this.seasonConfig[season];
        return (<div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1> {text} </h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>);
    }
}

export default SeasonDisplay;




