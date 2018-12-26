import React from "react";

const Card = (props) => {
  return(
      <div>
            <img alt="fota" width="100" src={props.avatar}/>
                <div style={{display: 'inline-block', marginLeft: 10}}>
                    <div style={{fontSize: '1.2em', fontWeight: 'bold'}}>{props.name}</div>
                    <div>{props.company}</div>
                </div>
            </div>
  );
};
export default  Card;