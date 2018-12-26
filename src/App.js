import React from "react";
import CardList from "./component/CardList";
import Form from "./component/Form";


class App extends React.Component {
    state = {
        cards: []
    };

    render() {
        return (

            <div>
                <p>React App Demo.</p>
                <Form onSubmit={this.addNewCard}/>
                <CardList cards={this.state.cards}/>
            </div>
        );
    }
}
export default App;