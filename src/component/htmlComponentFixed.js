import React from "react";

let array = [1,2,3,4,5];
let user = {
    nick:"oko",
    name:"mario",
    city:"aaaaaaaaa"
};
const pi = 3.14;

const htmlComponentFixed = () => (
    <div>
        <h1>name and surname</h1>
        <p style={{backgroundColor:"red"}} className="user">oko</p>
        <p>pi = {pi}</p>

        {array.map(number => <p style={{backgroundColor:"yellow"}}>{number}</p>)}


        <h2>dane uzytkownika</h2>
        <p>nick: {user.nick}</p>
        <p>name: {user.name}</p>
        <p>city: {user.city}</p>

        <label htmlFor="exampleInput">haslo</label>
        <input id="exampleInput" type="password"/>
        <p><span>koment</span></p>
    </div>
);
export default htmlComponentFixed()