import React from 'react';

interface UserMessage {
    name: string,
    message: string;
}

// functional (or stateless) component
// Adding a prop to expect message as a string and a return type of any (since we are returning HTML). Omitting defaults
// to any.
const Message = (props: UserMessage) : any => {
    return (
        <p>{props.name}, {props.message}</p>
    );
}

export default Message;