import React from "react";

class Button extends React.Component {
    render() {
        return (
        <button onClick={this.props.onClickFunction}>
            +1
        </button>
        );
    }
}

export default  Button;