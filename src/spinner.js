import React, { Component } from 'react';

class Spinner extends Component {

    getProps = () => {
        return this.props.message;
    };

    render() {
        return (
            <div className="ui active dimmer">
                <div className="ui big text loader">
                    {this.getProps()}
                </div>
            </div>
        );
    }
}

export default Spinner;