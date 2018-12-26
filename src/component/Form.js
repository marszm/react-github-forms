import React from "react";
import axios from "axios";
class Form extends React.Component {
    state = {userName: ''}
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event form submit: ', this.state.userName);
        axios.get("https://api.github.com/users/${this.state.userName}")
            .then(resp => {
                this.props.onSubmit(resp.data);
                }
            );
    };
    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
            })
        )
    };
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.userName}
                       onChange={(event) => this.setState({userName: event.target.value})}
                       placeholder="Github username"/>
                <button type="submit">Add card!</button>

            </form>
        );
    }
}
export default  Form;