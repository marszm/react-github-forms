import React from "react";
import Button from "./component/Button";
import Result from "./component/Result";

class App extends React.Component {

    state = {counter: 0};

    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    };

    render() {
        return (

            <div>
                <p>React App Demo.</p>
                <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={3} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={9} onClickFunction={this.incrementCounter}/>
                <Result counter={this.state.counter}/>
            </div>
        );
    }
}
export default App;