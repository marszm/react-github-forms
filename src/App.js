import React from "react";
import Button from "./component/Button";
import Result from "./component/Result";

class App extends React.Component {

    state = {counter: 0};

    incrementCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    render() {
        return (

            <div>
                <p>React App Demo.</p>
                <Button onClickFunction={this.incrementCounter}/>
                <Result counter={this.state.counter}/>
            </div>
        );
    }
}
export default App;